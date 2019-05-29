import React, { Component } from 'react';

import './Profile.css';

class Profile extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {

  
  return (
    <div>
        <div className="headerForm">
    </div>
    <div className="profilePic">
    <img src="data:image/png;base64,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"/>
    </div>
    
    <div className="sider">
    <h2>Jaclyn Shahan</h2>
    <button className="editButton">Edit Profile</button>
    <h5>Position: Full-Stack Developer</h5>
    <h5>Company: Blarg</h5>
    <h5>Location: 123 Street</h5>
    <h5>Hire Date: 5/5/19</h5>
    <h5>Status: Full-Time Hourly</h5>
    <h5>Rate: $15.50</h5>
    </div>
    <div>
    <h1 className="tasks">My Tasks:</h1> 
    </div>
    </div>
  );
  
  }
}

export default Profile;