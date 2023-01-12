import React from "react";
import TodoForm from "./components/TodoForm";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);

  // Get todo items from the local storage
  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setTodos(items);
    }
  }, []);

  // update the local storage anytime the todos state is updated
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const todo = { id: nanoid(), text: text, isCompleted: false };
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const updatedTodo = [...todos].filter((todo) => todo.id !== id); // [...todos] because it makes a copy of the todos state.
    setTodos(updatedTodo);
  };

  const completeTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
