import React, { Component } from 'react';
import SignUp from './SignUp';
import './Login.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  showDrawer = () => {
    this.setState({
      visible: true
    })
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  render () {

  
  return (
    <div className="wrapper">
        <form className="loginForm">
            <h1 className="header">WELCOME</h1>
            <h4 className="h4">Login or Sign Up</h4>
        <input
        className="inputName"
        placeholder="Username"
        />
        <input
        className="inputPass"
        placeholder="Password"
        />
        <button className="loginButton">Login</button>
        <h4 className="h4"> 
        Don't have an account? 
        <button 
        className="signUp" 
        onClick={this.showDrawer}>
         {''} Sign-Up
         </button>
        </h4>
        <SignUp visible={this.state.visible} onClose={this.onClose} />
        </form>
    
    </div>
  );
  
  }
}


const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    defineUser(user) {
        dispatch({
            type: 'GET_USER',
            payload: user
        }) 
    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)