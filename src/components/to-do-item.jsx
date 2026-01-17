import React, { useState } from "react";

// một item trong list (danh sách) - toggle và delete
// Gọi call back onToggle và onDelete voiws ID
// BTVN hiện tạo là đang xoá trực tiếp, cần update khi xoá hiển thị ra 1 modal đã xác nhận
// khi chuyển trạng thái cũng phải có modal xác nhận
// xoá todo sử dụng tailwindcss
export default function ToDoItem({ todo, onToggle, onDelete }) {
  const [modalType, setModalType] = useState(null); // 'delete' , 'Toggle', hoặc null
  // hàm xử lý chung để đóng modal
  const closeModal = () => setModalType(null);

  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 rounded">
      {/*khi click vào text sẽ sử dụng toogle*/}
      <span
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
        onClick={() => setModalType("toggle")} // mở modal toggle
      >
        {todo.text}
      </span>
      {/* nút xóa */}
      <button
        className="ml-2 text-red-500 hover:text-red-700"
        onClick={() => setModalType("delete")}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
      {/* {modal xác nhận xoá và xác nhận hoàn thành} */}
      {
        modalType !== null ? (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center">
              <h3 className="font-bold text-lg mb-2">
                {modalType === "delete"
                  ? "Xác nhận xóa"
                  : "Thay đổi trạng thái"}
              </h3>

              <p className="text-gray-600 mb-6">
                {modalType === "delete"
                  ? "Bạn có chắc muốn xóa mục này?"
                  : "Bạn muốn đổi trạng thái hoàn thành?"}
              </p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Hủy
                </button>

                <button
                  onClick={() => {
                    if (modalType === "delete") onDelete(todo.id);
                    else onToggle(todo.id);
                    closeModal();
                  }}
                  className={`px-4 py-2 text-white rounded ${
                    modalType === "delete" ? "bg-red-500" : "bg-blue-500"
                  }`}
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        ) : null /* chú thích Nếu modalType là null thì không hiện gì cả */
      }
    </li>
  );
}
