import React from "react";

//  Filter trạng thái của todo (lọc)
// UI của buton filter sẽ thay đổi theo state
// không logic filter ở đây
// hiển thị được các giá trị tiếng việt của từng filter (vd all = tất cả)
// đẩy lên git và vercel
export default function TodoFilter({ filter, setFilter }) {
  const filters = ["all", "active", "completed"];
  return (
    <div className="flex justify-center gap-2 my-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 border rounded text-uppercase ${
            filter === f ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
