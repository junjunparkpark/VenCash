import React from 'react';
import TodoItem from './TodoItem.jsx';
import axios from 'axios';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{description: 'test'}],
      currentTodo: ''
    }
  }

  handleInputChange(e) {
    this.setState({currentTodo: e.target.value});
  }

  handleAddTodo(e) {
    e.preventDefault();
    let newList = [{description: this.state.currentTodo}].concat(this.state.list);

    axios.put('/api/user', {
      list: newList,
      user: this.props.currentUser
    })
      .then((response) => {
        console.log(response);
        e.target.value = ''
        this.setState({
          list: newList,
          currentTodo: ''
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container init">
        <h1>Todos</h1>

        <form onSubmit={this.handleAddTodo.bind(this)}>
          <div className="form-row" > 
            <div className="col-6">
              <input className="form-control" placeholder="Enter todo" onChange={this.handleInputChange.bind(this)}/>
            </div>
            <div className="col-2">
              <button className="btn btn-primary">Add new</button>
            </div>
          </div>
        </form>

        <div id="todo-list" className="container">
          {this.state.list.map(todo => <TodoItem todo={todo} />)}
        </div>
      </div>
    );
  }
}

export default Todo;