import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './Messages.css';
import {Badge} from 'antd';

class Messages extends Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      endpoint: "http://localhost:3052",
      response: false
    }
  }

  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('msgs', data => this.setState({messages: data}))
  }

  render () {
const {messages} = this.state;
  
  return (
    <div>
    
       <Badge count={messages.length} showZero>
      <a href="#" className="badgePosition" />
    </Badge>
      <form className="messageNotify">
      Messages:
    {messages.map(item => <p key={item}>{item}</p>)}
      </form>
    </div>
  );
  
  }
}

export default Messages;