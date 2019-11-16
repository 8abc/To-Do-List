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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    //prevState mirrors our state from line 12
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        //if an item that matches an id is clicked there will be a checkbox
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    //new array to map method
    //we map through todosData is in state
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
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
