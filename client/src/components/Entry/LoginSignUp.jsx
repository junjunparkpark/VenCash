import React from 'react';

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleEmailChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSignUpClick(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.signUpUser(this.state);

  }

  handleLoginSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.authenticateUser(this.state);
  }

  

  render() {
    return (
      <div id="">
        <div className="col-md-3"></div>
        <div className="col-md-6">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default LoginSignUp;