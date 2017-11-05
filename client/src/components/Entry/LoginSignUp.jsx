import React from 'react';

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSignUpClick(e) {
    console.log('handleSignUp Clicking!!', this.state);

  }

  handleLoginSubmit(e) {
    e.preventDefault
    console.log('Login Submitting -->', this.state)
  }

  

  render() {
    return (
      <div>
        <div className="col-md-3"></div>
        <form className="center" onSubmit={this.handleLoginSubmit.bind(this)}>
          <div className="form-group row col-md-6">
            <input className="form-control mb-2 mb-sm-0" name="e-mail" placeholder="E-mail" onChange={this.handleEmailChange.bind(this)}/> 
          </div> 
          <div className="form-group row col-md-6">
            <input className="form-control mb-2 mb-sm-0" name="password" type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />  
          </div>
          <div className="form-group row">
            <div className="col-md-3">
              <button className="btn btn-primary" onClick={this.handleSignUpClick.bind(this)}>Sign Up</button>
            </div>
            <div className="col-md-3 pull-right">
              <button className="btn btn-primary"  type="submit">Login</button>
            </div>
          </div>
        </form>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default LoginSignUp;