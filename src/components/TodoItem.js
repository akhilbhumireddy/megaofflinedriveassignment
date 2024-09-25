import React from "react";
import { updateTodoStatus, deleteTodo } from "../services/todoService";
import "./TodoItem.css";

const TodoItem = ({ todo, fetchTodos }) => {
  const handleStatusChange = async (e) => {
    await updateTodoStatus(todo.id, e.target.value);
    fetchTodos();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    fetchTodos();
  };

  return (
    <li>
      <span>{todo.title}</span>
      <select value={todo.status} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
