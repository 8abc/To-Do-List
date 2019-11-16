import React from "react";
import Navbar from "./components/Navbar";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//created a class component to add state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    //new array to map method
    //we map through todosData is in state
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return (
      <div className="todo-list">
        <Navbar />
        {todoItems}
      </div>
    );
  }
}

export default App;
