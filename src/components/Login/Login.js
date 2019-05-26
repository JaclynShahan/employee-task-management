import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {

  
  return (
    <div className="wrapper">
        <form className="loginForm">
            <h1 className="header">WELCOME</h1>
        <input
        className="inputName"
        placeholder="Username"
        />
        <input
        className="inputPass"
        placeholder="Password"
        />
        <button className="loginButton">Login</button>
        <h4 className="h4"> Not a Member? <button className="signUp">Sign-Up</button>
 </h4>
        
        </form>
    
    </div>
  );
  
  }
}

export default Login;