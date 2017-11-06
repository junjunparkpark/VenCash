import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="container row">
      <div className="col-4">
      <h3>{props.todo.description}</h3>
      </div>
      <div className="col-2">
        <button className="btn btn-alert">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;