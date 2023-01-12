import React from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // To prevent the browser from refreshing the page.
    addTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={input} className="todo-input" onChange={handleChange} />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
