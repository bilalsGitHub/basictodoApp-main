import { useEffect, useRef, useState } from "react";
import "./App.css";
import ToDoList from "./components/pages/todolist/todolist";

function App() {
  const storedtodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, settodos] = useState(storedtodos);
  const inputref = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    settodos(updatedTodos);
  };
  return (
    <>
      <div className="body">
        <h2>Basic to do app</h2>

        <div className="inputfield">
          <input
            className="input"
            ref={inputref}
            type="text"
            placeholder="Add your todo "
          />
          <button
            className="button"
            onClick={() => {
              if (inputref.current.value !== "") {
                const newTodo = {
                  id: Date.now(), // Use a unique identifier (you might need a better approach in a real app)
                  value: inputref.current.value,
                };
                settodos([...todos, newTodo]);
                inputref.current.value = "";
              }
            }}>
            Add todo
          </button>
        </div>

        <ToDoList onDeleteTodo={handleDeleteTodo} todos={todos}></ToDoList>
      </div>
    </>
  );
}

export default App;
