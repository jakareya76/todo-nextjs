"use client";
import { useState } from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const [todoData, setTodoData] = useState(todos);

  const deleteTodoFromState = (id) => {
    setTodoData((prevTodo) => {
      return prevTodo.filter((todo, idx) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <ul className="pl-4">
      {todoData.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          deleteTodoFromState={deleteTodoFromState}
        />
      ))}
    </ul>
  );
};
export default TodoList;
