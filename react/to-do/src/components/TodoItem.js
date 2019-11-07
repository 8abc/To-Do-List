import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

function TodoItem() {
  return (
    <div className="todo-item">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup.Prepend>
        <FormControl aria-label="Text input with checkbox" />
      </InputGroup>
    </div>
  );
}

export default TodoItem;
