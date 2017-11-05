import React from 'react';
import LoginSignUp from './LoginSignUp.jsx';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        <div className="container">
          <h1>VenCash</h1>
          <LoginSignUp />
        </div>
      </div>
    );
  }
}

export default Landing;