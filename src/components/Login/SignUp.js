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
            redirect: ''
        }
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
        return(
    <Drawer
        title='Create an Account'
        placement='bottom'
        closable={false}
        onClose={this.props.onClose}
        visible={this.props.visible}
      >

      <input
      className="inputName"
      placeholder="First Name"
      value={this.state.firstName}
      />
      <input
      className="inputName"
      placeholder="Last Name"
      value={this.state.lastName}
      />
      <input
      className="inputName"
      placeholder="Create Username"
      value={this.state.createUsername}
      />
      <input
      className="inputName"
      placeholder="Create Password"
      value={this.state.createPassword}
      />
      
      </Drawer>
        )
    }
}

export default SignUp;