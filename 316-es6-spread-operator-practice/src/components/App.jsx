import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [toDoList, setToDoList] = useState(["Buy eggs"]);

  function addItem(newItem) {
    setToDoList((prevList) => [...prevList, newItem]);
    console.log(newItem);
  };

  function removeItem(index) {
    console.log(index);
    setToDoList((prevList) => prevList.filter((_, i) => i!== index));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      {/* <div className="form">
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
      </div> */}
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
