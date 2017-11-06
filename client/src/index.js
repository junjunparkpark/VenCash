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
    }
  }

  authenticateUser(user) {
    console.log('this is getting invoked!', user);
  }

  signUpUser(user) {
    console.log('SignUpUser getting invoked at App', user);
    axios.post('/api/user', {
      username: 'jun',
      password: '123'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  render() {
    return (
      <div>
        { this.state.loggedIn 
        ? <Todo />
        : <Landing authenticateUser={this.authenticateUser.bind(this)} signUpUser={this.signUpUser.bind(this)}/>

        }
      </div>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));