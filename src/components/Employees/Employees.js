import React, { Component } from 'react';
import {Icon} from 'antd';
import './Employees.css';
import Table from './Table.js';

class Employees extends Component {
  constructor () {
    super()
    this.state = {
      employees: [],
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      active: true

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
    <Table 
    users={this.state.employees}
    />
    </div>
  );
  
  }
}

export default Employees;