import React, { Component } from 'react';
import { Icon } from 'antd';
import './Tasks.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Inbox from './children/Inbox.js';
import Today from './children/Today.js';
import Complete from './children/Complete.js';
import Overdue from './children/Overdue.js';
import TaskHistory from './children/TaskHistory.js';
import Axios from 'axios';
import CreateNew from './CreateNew.js';


class Tasks extends Component {
  constructor () {
    super()
    this.state = {
      subject: '',
      text: '',
      expiry_date: '',
      visible: false
    }
  }
makeTask = e => {
  e.preventDefault()
Axios.post('/api/createTask', {
  subject: this.state.subject,
  text: this.state.text,
  expiry_date: this.state.expiry_date,
  comments: [],
  createTask: this.props.setTask.tasks.createTask
}).then(resp => {
  this.props.defineTask(resp.data)
  console.log(resp)
})
}

onClose = () => {
  this.setState({visible: false})
}

showCreateTask = () => {
  this.setState({visible: !this.state.visible})
}
  render () {

  
  return (
      <div className="taskbarNav">
     
      <div>
        <Link to='/tasks/children/inbox'>Inbox</Link>
        <Link to='/tasks/children/today'>Today</Link>
        <Link to='/tasks/children/complete'>Complete</Link>
        <Link to='/tasks/children/overdue'>Overdue</Link>
        <Link to='/tasks/children/taskhistory'>Task History</Link>
    
      </div>
    
      <Switch>
      <Route path='/tasks/children/inbox' component={Inbox}/>
      <Route path='/tasks/children/today' component={Today}/>
      <Route path='/tasks/children/complete' component={Complete}/>
      <Route path='/tasks/children/overdue' component={Overdue}/>
      <Route path='/tasks/children/taskhistory' component={TaskHistory}/>
    </Switch>
    <CreateNew visible={this.state.visible} onClose={this.onClose}/>
    <h4 className="createIcon">New Task: <br></br><Icon onClick={this.showCreateTask} style={{fontSize: '30px'}}className="create" type="file-add" /></h4>
        
 
   </div>

  );
  
  }
}

export default Tasks;