import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Entry/Landing.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      currentUser: '',
      username: ''
    }
  }

  authenticateUser() {

  }

  render() {
    return (
      <div>
        <Landing authenticateUser={this.authenticateUser.bind(this)} />
      </div>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));