import EmptyState from "./empty-state";
import ToDoItem from "./to-do-item";
import React from "react";
// render list + empty state
// component này chỉ phục render, không giữ state
export default function ToDoList({ todos, onToggle, onDelete }) {
  // khi không có todo => hiển thị empty
  if (todos.length === 0) {
    return <EmptyState />;
  }
  return (
    <ul className="space-y-2 mt-4">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
