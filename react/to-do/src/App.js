import React from "react";
import Navbar from "./components/Navbar";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="todo-list">
      <Navbar />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
