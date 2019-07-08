import React, { Component } from 'react';
import {Icon} from 'antd';
import './Employees.css';
import Table from './Table.js';
import { connect } from 'react-redux';

class Employees extends Component {
  constructor () {
    super()
    this.state = {
      searchArr: [],
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      active: true,
      searchString: ''

    }
  }
  updateSearchString (searchString) {
    this.setState({searchString})
}

onSearch = () => {
    if(this.state.searchString.length > 0) {
        const filteredUser = this.props.setUser.searchUser.filter(user => {
            if (
                user.firstName
                .toLowerCase()
                .includes(this.state.searchString.toLowerCase()) ||
              user.lastName
                .toLowerCase()
                .includes(this.state.searchString.toLowerCase())  
                ) {
                    return true
                } else {
                    return false
                }
        })
        console.log(filteredUser)
        this.props.findUser(filteredUser)
    } else {
        this.props.findUser([])
    
    }
}
onKey = e => {
    const key = e.keyCode || e.which
    if (key == 13) {
        this.onSearch()
    }
}

  render () {
    const searchString = this.state.searchString;
  
  return (
           <div className="boxAround">
        <input 
        className="searchBar"
        placeholder="Search Employees..."
        value={searchString}
        onChange={e => this.updateSearchString(e.target.value)}
            onKey={e => this.onKey(e)}
        />
        <button className="searchButton" onClick={() => this.onSearch()}><Icon style={{fontSize: '20px'}}type="search"/></button>
    <Table 
    users={this.state.searchArr}
    />
     </div>
  
  );
  
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    findUser (searchUser) {
        dispatch({
            type: 'SEARCH_USER',
            payload: searchUser
        })
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Employees)