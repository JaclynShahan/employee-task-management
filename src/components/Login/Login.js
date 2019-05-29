import React, { Component } from 'react';
import SignUp from './SignUp';
import './Login.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

class Login extends Component {
  constructor () {
    super()
    this.state = {
        username: '',
        password: '',
       

    }
  }
 
  getUser = e => {
      e.preventDefault()
      Axios.get(
          `/api/getUser?username=${this.state.username}&password=${this.state.password}`
      )
      .then(resp => {
          this.props.defineUser(resp.data[0])
      })
      .then(resp => this.setState({ redirect: <Redirect to='/Home' />}))
  }
  changeUser = (e, stateProperty) => {
    this.setState({ [stateProperty]: e.target.value
        })
  }

  onClear = () => {
      this.setState({
          username: '',
          password: ''
      })
  }
  render () {

  
  return (
    <div className="wrapper">
        <button className="logintab logintabborder">LOGIN</button>
        <button className="logintab signuptab">SIGNUP</button>
        <form>
            <h1 className="header">WELCOME</h1>
            <h4 className="h4">Login or Sign Up</h4>
        <input
        className="inputName"
        placeholder="Username"
        value={this.state.username}
        onChange={e => this.changeUser(e, 'username')}
        />
        <input
        className="inputPass"
        placeholder="Password"
        value={this.state.password}
        onChange={e => this.changeUser(e, 'password')}
        />
        {this.props.setUser.user.username ? <Redirect to='/Home'/> : ''}
        <button 
        className="loginButton"
        type="submit"
        onClick={e => this.getUser(e)}
        >Login</button>
        <h4 className="h4"> 
        Don't have an account? 
        <button 
        className="signUp" 
      
        >
         {' '} Sign-Up
         </button>
        </h4>
        
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