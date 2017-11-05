import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Entry/Landing.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      currentUser: '',
      username: '',
      firstName: '',
      lastName: ''
    }
  }

  render() {
    return (
      <div>
        <Landing />
      </div>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));