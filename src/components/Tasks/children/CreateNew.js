import React, { Component } from 'react';
import '../Tasks.css';
import { Icon } from 'antd';
import Axios from 'axios';


class CreateNew extends Component {
    constructor() {
        super()
        this.state = {
           tasks_body: '',
           creator_id: '',
           create_date: '',
           parent_task_id: '',
           expiry_date: '',
           is_reminder: '',
           next_remind_date: '',
           reminder_frequency_id: '',
           user_id: '',
           tasks_subject: ''
        }
    }
    makeTask = e => {
        e.preventDefault()
      Axios.post('/api/createTask', {
      tasks_body: this.state.tasks_body,
      creator_id: this.state.creator_id,
      create_date: this.state.create_date,
      parent_task_id: this.state.parent_task_id,
      expiry_date: this.state.expiry_date,
      is_reminder: this.state.is_reminder,
      next_remind_date: this.state.next_remind_date,
      reminder_frequency_id: this.state.reminder_frequency_id,
      user_id: this.state.user_id,
      tasks_subject: this.state.tasks_subject,
        comments: [],
        createTask: this.props.setTask.tasks.createTask
      }).then(resp => {
        this.props.defineTask(resp.data)
        console.log(resp)
      })
      }
   onChangeTask = (e, stateProperty) => {
    this.setState({ [stateProperty]: e.target.value})
   }   

    onOkay = () => {
        this.setState({visible: false})
    }

   createModal = () => {
       if (this.props.visible == true) {
           return "visible"
       } return "hidden"
   } 

    render() {
        return(
            <div style={{visibility: this.createModal()}}>
            <div className="createModal">
                <Icon onClick={this.props.onClose} className= "exitIcon" type="close"/>
               <form className="spanForm">
                <h5 className="spanTitle">Author:</h5>
                <span
                value={this.state.creator_id}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Date:</h5>
                <span
                value={this.state.create_date}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Tasks Expires:</h5>
                <span
                value={this.state.expiry_date}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Reminder Date:</h5>
                <span
                value={this.state.is_reminder}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Next Reminder Date:</h5>
                <span
                value={this.state.next_remind_date}
                onChange={e => this.onChangeTask(e)}
                ></span>
                </form>
                <input 
                className="createInputs createInputs1"
                placeholder="Subject"
                value={this.state.tasks_subject}
                onChange={e => this.onChangeTask(e)}
                />
               <input
               className="createInputs"
               placeholder="Send To"
               value={this.state.user_id}
               onChange={e => this.onChangeTask(e)}
               />
               <form 
               value={this.state.tasks_body}
               onChange={e => this.onChangeTask(e)}
               placeholder="New Task Message..."
               className="createForm">
        
               </form>
               <button className="createButtons createOk" onClick={this.onOkay}>OK</button>
               <button className="createButtons" onClose={this.props.onClose}>CLOSE</button>

            </div>

            </div>
        )
    }
}

export default CreateNew;