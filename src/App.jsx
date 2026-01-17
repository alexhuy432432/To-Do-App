import TodoFilter from "./components/to-do-filter";
import ToDoInput from "./components/to-do-input";
import ToDoList from "./components/to-do-list";
import { useTodos } from "./hooks/use-to-do";
import React from "react";
import { useState } from "react";
// component Cha, nơi
// Quản lý các state chính
// ghép các component còn lại
function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        {/* input thêm todo */}
        <ToDoInput onAdd={addTodo} />
        {/*Filter */}
        <TodoFilter filter={filter} setFilter={setFilter} />
        {/*Danh sách todo */}
        <ToDoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
