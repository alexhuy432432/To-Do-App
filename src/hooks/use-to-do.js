import { use, useEffect, useState } from "react";
import { loadTodos, saveTodos } from "../utils/storage";

export function useTodos() {
  // load todo từ localstorage
  const [todos, setTodos] = useState(() => loadTodos());

  // hàm thêm Todo
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };
  // toggle conpelted đổi trạng thái của todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // hàm delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // lưu todos vào localstorage mỗi khi todos thay đổi
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
