import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
import Employees from './components/Employees/Employees.js';
import Home from './components/Home/Home.js';
import Messages from './components/Messages/Messages.js';
import Profile from './components/Profile/Profile.js';
import Tasks from './components/Tasks/Tasks.js';
import Toggle from './components/Login/Toggle.js';
import Inbox from './components/Tasks/children/Inbox.js';
import Today from './components/Tasks/children/Today.js';
import Complete from './components/Tasks/children/Complete.js';
import Overdue from './components/Tasks/children/Overdue.js';
import TaskHistory from './components/Tasks/children/TaskHistory.js';

export default (
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={Toggle} />
      <Route path='/home' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/employees' component={Employees} />
      <Route path='/tasks' component={Tasks} />
      <Route path='/messages' component={Messages} />
    </Switch>
    <Switch>
      <Route path='/tasks/children/inbox' component={Inbox}/>
      <Route path='/tasks/children/today' component={Today}/>
      <Route path='/tasks/children/complete' component={Complete}/>
      <Route path='/tasks/children/overdue' component={Overdue}/>
      <Route path='/tasks/children/taskhistory' component={TaskHistory}/>
    </Switch>
  </Provider>
)
