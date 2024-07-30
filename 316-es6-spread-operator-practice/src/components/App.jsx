import React, { useState } from "react";
import RemoveButton from "./RemoveButton";
import ToDoItem from "./ToDoItem";

function App() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoList, setToDoList] = useState(["Buy eggs"]);
  function handleChange(event) {
    setToDoItem(event.target.value);
  }

  function handleClick() {
    setToDoList((prevList) => [...prevList, toDoItem]);
    console.log(toDoItem);
    setToDoItem("");
  }
  function handleKeyDown(event) {
    event.key === "Enter" && handleClick();
  }

  function removeItem(index) {
    console.log(index);
    setToDoList((prevList) => prevList.filter((_, i) => i!== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Do something"
          onChange={handleChange}
          value={toDoItem}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((item, index) => (
            <ToDoItem key={index} item={item} id={index} removeItem={removeItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
