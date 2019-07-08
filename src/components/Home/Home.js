import React, { Component } from 'react';
import { Calendar } from 'antd';
import './Home.css';
import PieChart from './PieChart.js';
import BarChart from './BarChart.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  

  render () {

  
  return (
      <div >
        <PieChart />
        <BarChart />
      
        <button 
        className="logoutButton"
        onClick={() => this.props.defineUser({})}
        >Logout</button>

       </div>
    
    
  );
  
  }
}
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    defineUser(user) {
        dispatch({
            type: 'GET_USER',
            payload: user
        }) 
    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)