import React from "react";

export default TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};