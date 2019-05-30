import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Toggle extends Component {
    constructor() {
        super() 
        this.state = {
            viewingComponent: <Login/>
            //viewingComponent: ' '
        }
    }

    render () {
        return (
            <div className="wrapper">
        <button
            onClick={() => this.setState({viewingComponent: <Login/>})}
            className="logintab logintabborder">
            LOGIN
        </button>
         <button 
            onClick={() => this.setState({viewingComponent: <SignUp/>})}
            className="signuptab">
            SIGNUP
        </button>
        {this.state.viewingComponent}
            </div>

        )
    }
}

export default Toggle;