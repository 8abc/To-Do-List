import React from "react";
import Navbar from "./components/Navbar";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  //new array to map method
  const todoItems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));
  return (
    <div className="todo-list">
      <Navbar />
      {todoItems}
    </div>
  );
}

export default App;
