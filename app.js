let todos = ["clean"];

let input = prompt("What would you like to do?");
while (input !== "quit") {
  //handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    newTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}

console.log("OK, you quit the app");

function listTodos() {
  //loops through todos array and runs function whic prints in separate lines
  console.log("********");
  todos.forEach(function(todo, i) {
    console.log(i + ":" + todo);
  });
  console.log("********");
}

function newTodo() {
  //ask for new todo
  let newTodo = prompt("Enter new todo");
  //add todos array
  todos.push(newTodo);
  console.log("Added To do");
}

function deleteTodo() {
  //ask for index of todo to be deleted
  let index = prompt("Enter index of todo to delete");
  //delete todo
  //splice() takes in 2 arguments
  // the index it will start at and how many items to remove
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
