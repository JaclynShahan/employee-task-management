import React, { Component } from 'react';

import './Tasks.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Inbox from './children/Inbox.js';
import Today from './children/Today.js';
import Complete from './children/Complete.js';
import Overdue from './children/Overdue.js';
import TaskHistory from './children/TaskHistory.js';


class Tasks extends Component {
  constructor () {
    super()
    this.state = {

    }
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
   </div>
  );
  
  }
}

export default Tasks;