import React from 'react';
import LoginSignUp from './LoginSignUp.jsx';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        Landing Page!
        <LoginSignUp />

      </div>
    )
  }
}

export default Landing;