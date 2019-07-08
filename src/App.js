import React, { Component } from 'react';

import './App.css';
import router from './router';
import { Link } from 'react-router-dom';



class App extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {

  
  return (
    <div className="routeBar">
    <div>
          <Link to='/'>Login</Link>
          <Link to='/home'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/employees'>Employees</Link>
          <Link to='/tasks'>Tasks</Link>
          <Link to='/messages'>Messages</Link>
         


     </div>  
     {router}   
    </div>
  );

  }
}

export default App;