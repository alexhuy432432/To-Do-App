const KEY = "todos";
export const loadTodos = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch (error) {
    return [];
  }
};

export const saveTodos = (todos) => {
  localStorage.setItem(KEY, JSON.stringify(todos));
};

// Lưu ý :
// không nhét localStorage vào components
//  Clean code, dễ test (debug) sau này
