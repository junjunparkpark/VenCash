import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Entry/Landing.jsx';
import axios from 'axios';
import Todo from './components/Todo/ToDo.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      currentUser: '',
      todos: []
    }
  }

  authenticateUser(user) {
    console.log('this is getting invoked!', user);
    axios.get('/api/user', {
      params: {
        username: user.username,
        password: user.password
      }
    })
      .then((response) => {
        console.log(response);
        this.setState({
          loggedIn: true,
          currentUser: user.username,
          todos: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signUpUser(user) {
    console.log('SignUpUser getting invoked at App', user);
    axios.post('/api/user', {
      username: user.username,
      password: user.password
    })
      .then((response) => {
        console.log(response);
        this.setState({
          loggedIn: true,
          currentUser: user.username
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  render() {
    return (
      <div>
        { this.state.loggedIn 
        ? <Todo todos={this.state.todos}/>
        : <Landing authenticateUser={this.authenticateUser.bind(this)} signUpUser={this.signUpUser.bind(this)}/>
        }
      </div>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));