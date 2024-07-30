import React, { useState } from "react";

export default function InputArea(props) {
  const [toDoItem, setToDoItem] = useState("");
  function handleChange(event) {
    setToDoItem(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
        props.addItem(toDoItem);
        setToDoItem("");
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Do something"
        onChange={handleChange}
        value={toDoItem}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          props.addItem(toDoItem);
          setToDoItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
