import React, { useState } from "react";

// Controlled input + sunmit (điều khiển quá trình nhập và submit hành động thêm to do)
/**
 * Controlled component
 * không xử lý state todo ở đây
 * Gọi callback từ cha chính là hàm onAdd
 */
export default function ToDoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return; // không cho add rỗng
    onAdd(text); // gọi hàm thêm từ cha
    setText(""); //reset input
  };
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 border px-3 py-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Thêm tác vụ"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={!text.trim()}
        onClick={handleAdd}
      >
        Thêm
      </button>
    </div>
  );
}
