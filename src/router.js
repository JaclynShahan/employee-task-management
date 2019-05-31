import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
import Employees from './components/Employees/Employees.js';
import Home from './components/Home/Home.js';
import Messages from './components/Messages/Messages.js';
import Profile from './components/Profile/Profile.js';
import Tasks from './components/Tasks/Tasks.js';
import Login from './components/Login/Login.js';
import Toggle from './components/Login/Toggle.js';

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
  </Provider>
)
