import React, { Component } from 'react';
import {Icon} from 'antd';
import './Employees.css';

class Employees extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {

  
  return (
    <div className="boxAround">
        <input 
        className="searchBar"
        placeholder="Search Employees..."
        />
        <button className="searchButton"><Icon style={{fontSize: '20px'}}type="search"/></button>
    
    </div>
  );
  
  }
}

export default Employees;