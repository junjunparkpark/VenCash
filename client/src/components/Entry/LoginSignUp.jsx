import React from 'react';

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <div className="col-md-3"></div>
        <form className="center">
          <div className="form-group row col-md-6">
            <input className="form-control mb-2 mb-sm-0" name="e-mail" placeholder="E-mail"/> 
          </div> 
          <div className="form-group row col-md-6">
            <input className="form-control mb-2 mb-sm-0" name="password" type="password" placeholder="Password" />  
          </div>
          <div className="form-group row">
            <div className="col-md-3">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <div className="col-md-3 pull-right">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </div>
        </form>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default LoginSignUp;