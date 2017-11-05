import React from 'react';

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <form>
          <input name="e-mail" /> <br />
          <input name="password" type="password" /> <br />
          <button>Sign Up</button><br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginSignUp;