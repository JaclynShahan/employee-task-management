import React, { Component } from 'react';
import Employees from './Employees.js';
import './Table.css';

class Table extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const tableData = this.props.users.map((employee, indexPoint) => {
            return (
              <tr key={indexPoint}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dob}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.active}</td>
              </tr>
            )
      
          })
        return(
           <table className="tableStyle">
               <tbody>
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>D.O.B</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Active</th>
                   </tr>
                   {tableData}
               </tbody>
           </table>
        )
    }
}

export default Table;