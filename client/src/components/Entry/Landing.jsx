import React from 'react';
import LoginSignUp from './LoginSignUp.jsx';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        <h1>VenCash</h1>
        <LoginSignUp />
      </div>
    );
  }
}

export default Landing;