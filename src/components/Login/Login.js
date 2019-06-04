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
          console.log(resp)
      })
      
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
    console.log(this.state)
    console.log(this.props)
  
  return (

    <div>
      
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
        type="password"
        />
        {this.props.setUser.user.username ? <Redirect to='/Home'/> : ''}
        <button 
        className="loginButton"
        type="submit"
        onClick={e => this.getUser(e)}
        >Login</button>

        
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