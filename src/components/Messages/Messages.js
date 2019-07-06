import React, { Component } from 'react';
import './Messages.css';
import {Badge} from 'antd';
import {socket} from '../../socket.js'
import Axios from 'axios';
import { connect } from 'react-redux';

class Messages extends Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      response: false,
      reply: '',
      author: ''
    }
  }

  componentDidMount() {
    // all of your socket.on events for this component go in here...

    var elmnt = document.getElementById("content") /// this keeps my chat at the bottom of the window.
    socket.on('msgs', data => {
      console.log(data)
      this.setState({messages: data}, () => elmnt.scrollIntoView())
    })

  }

  // changeUser = () => {
  //   socket.on('change_username', (data) => { // socket is just the connection to the Node server
  //     // socket.username = data.username // can't assign things to socket, silly
  //   })
  // }

sendMessage = e => {
  if (e.preventDefault){
    e.preventDefault()
  }
  socket.emit('send_message', {
    // might want to pass in userID here if you're putting these in the database
    reply: this.state.reply,
    author: this.props.setUser.user.username // the user who sends the message
  })
  this.setState({reply: ''})
}

  distinct = () => {
    let duplicates = [];
    this.state.messages.forEach(msg => {
      if (!duplicates.includes(msg.author)) {
        duplicates.push(msg.author)
      }
    })
    return duplicates;
  }



  render () {
    const {messages} = this.state;
    console.log(this.props.setUser.user)
  
  return (
    <div>
       <Badge count={messages.length} showZero>
      <a href="#" className="badgePosition" />
    </Badge>
      <form onSubmit={this.sendMessage}className="messageNotify">

      Messages:
      {messages.map((msg, i) => <p key={i}>{msg.author}: {msg.reply}</p>)}
      {/* The element below will allow us to autoscroll to bottom of chat window... I think */}
      <div id="content" /> 
      
      </form>
      <form className="replyForm">
      <input 
        onChange={e => this.setState({reply: e.target.value})}
        value={this.state.reply} // this will allow the input to render as empty when state is emptied
        className="replyInput"
        placeholder="Reply..."
      /> 
      <button 
        onClick={(e) => this.sendMessage(e)} 
        className="replyButton"
        disabled={this.state.reply.length < 1} // keep us from sending blank messages
      >
        SEND
      </button>
    </form>
    <form className="listForm">
      Employees in Chat:<br />
      {this.distinct()}
    </form>
    </div>
  );
  
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ // this returns an object, notice the ({ })

})
export default connect(mapStateToProps, mapDispatchToProps)(Messages);