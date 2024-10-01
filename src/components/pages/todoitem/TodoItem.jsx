import React from "react";
import "./todo.css";
import { MdOutlineDelete } from "react-icons/md";

const TodoItem = ({ value, onDelete, id }) => {
  return (
    <div className="flex">
      <div className="browncontainer">
        <div className="browncontainer-content">{value}</div>
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}>
        <MdOutlineDelete
          className="MdOutlineDelete"
          color="#562B08"
          size="2rem"></MdOutlineDelete>
      </button>
    </div>
  );
};

export default TodoItem;
