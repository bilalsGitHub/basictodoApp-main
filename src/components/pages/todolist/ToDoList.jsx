import React from "react";
import TodoItem from "../todoitem/todoitem";
import "./todolist.css";
const ToDoList = ({ todos, onDeleteTodo }) => {
  return (
    <div className="flexcontainer">
      {todos.map((each) => {
        return (
          <TodoItem
            key={each.id} // Assuming each todo has a unique id
            id={each.id}
            value={each.value}
            onDelete={onDeleteTodo}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
