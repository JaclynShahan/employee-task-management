import React, { Component } from 'react';
import { Calendar } from 'antd';
import './Home.css';
import PieChart from './PieChart.js';
import BarChart from './BarChart.js';

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
       </div>
    
    
  );
  
  }
}

export default Home;