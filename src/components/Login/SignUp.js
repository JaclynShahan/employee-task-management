import React, { Component } from 'react';
import { Drawer, Button, Icon, notification} from 'antd';
import './Login.css';
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class SignUp extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            createUsername: '',
            createPassword: '',
            redirect: '',
            visible: false
        }
    }

    addUser = e => {
        e.preventDefault()
        Axios.post('/api/createUser', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            createUsername: this.state.createUsername,
            createPassword: this.state.createPassword
        }).then(resp => {
            this.onClear()
            this.props.defineUser(resp.data)
            this.openNotification()
            console.log(resp)
        })
    }
    userChange = (e, stateProperty) => {
        this.setState({ [stateProperty]: e.target.value})
    }

    onClear = () => {
        this.setState({
          firstName: '',
          lastName: '',
          createUsername: '',
          createPassword: ''
        })
      }
      openNotification = () => {
        const close = () => {
          console.log(
            'Notification was closed. Either the close button was clicked or duration time elapsed.'
          )
        }
        const key = `open${Date.now()}`
        const btn = () => {
          return (
            <Button
              type='primary'
              size='small'
              onClick={() => notification.close(key)}
            />
          )
        }
        notification.open({
          message: 'User Successfully Added',
          description: (
            <Button
              type='primary'
              size='small'
              onClick={() => notification.close(key)}
            >
              Return to Site
            </Button>
          ),
          btn,
          key,
          onClose: close,
          onClick: () => {
            console.log('Notification Clicked!')
            this.setState({ redirect: <Redirect to='/Home' /> })
          }
        })
      }
    

    render() {
        console.log(this.state)
        return(
        <div>
      <input
      className="inputNameSignup"
      placeholder="First Name"
      value={this.state.firstName}
      onChange={e => this.userChange(e, 'firstName')}
      />
      <input
      className="inputNameSignup"
      placeholder="Last Name"
      value={this.state.lastName}
      onChange={e => this.userChange(e, 'lastName')}
      />
      <input
      className="inputNameSignup"
      placeholder="Create Username"
      value={this.state.createUsername}
      onChange={e => this.userChange(e, 'createUsername')}
      />
      <input
      className="inputNameSignup"
      type="password"
      placeholder="Create Password"
      value={this.state.createPassword}
      onChange={e => this.userChange(e, 'createPassword')}
      />
      <br></br>
      <button
      className="signupButtons"
      onClick={e => this.addUser(e)}
      >
          Submit
      </button>
      <button
      className="signupButtons"
      onClick={() => this.props.onClose()}
      >Cancel</button>
      {this.state.redirect}

   
     </div>
        )
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    defineUser (user) {
        dispatch({
            type: 'GET_USER',
            payload: user
        })
       
    },
    newUser (e) {
        dispatch({
            type: 'GET_USER',
            payload: e.target.value
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)