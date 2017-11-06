import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="container col-md-4">
      <h3>{props.description}</h3>
      <button className="btn btn-alert">Delete</button>
    </div>
  );
};

export default TodoItem;