import React from 'react';
import LoginSignUp from './LoginSignUp.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="center">
            <h1>ToDo List</h1>
            <LoginSignUp authenticateUser={this.props.authenticateUser} signUpUser={this.props.signUpUser} />
            

          </div>
        </div>
      </div>
    );
  }
}

export default Landing;