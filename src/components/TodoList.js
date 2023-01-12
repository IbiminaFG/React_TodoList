import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

function TodoList({ todos, removeTodo, completeTodo }) {
  const todoList = todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className={todo.isCompleted ? "todo-row complete" : "todo-row"}
      >
        {todo.text}
        <div className="iconsContainer">
          <RiCheckboxCircleLine onClick={() => completeTodo(todo.id)} />
          <RiDeleteBin2Line onClick={() => removeTodo(todo.id)} />
        </div>
      </div>
    );
  });
  return <div>{todoList}</div>;
}

export default TodoList;
