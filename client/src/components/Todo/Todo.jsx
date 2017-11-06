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
      <div className="container init">
        <h1>Todos</h1>

        <form>
          <input className="form-control mb-2 mb-sm-0" /><button className="btn btn-primary">Add new</button>
        </form>
        {this.state.list.map(todo => <TodoItem todo={todo} />)}

      </div>
    );
  }
}

export default Todo;