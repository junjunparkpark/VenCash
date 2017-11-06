import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.todos
    }
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        

      </div>
    );
  }
}

export default Todo;