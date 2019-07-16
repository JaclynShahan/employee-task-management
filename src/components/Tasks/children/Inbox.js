import React, { Component } from 'react';
import '../Tasks.css';
import { connect } from 'react-redux';
import Axios from 'axios';
import CreateNew from './CreateNew.js';
import {Icon} from 'antd';

class Inbox extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            visible: false

        }
    }
    componentDidMount () {
     Axios.get('/api/getTasks').then(results => {
         this.props.defineTasks(results.data)
     })
    }
    updateInbox (id, text, subject, date) {
        Axios.put(`/api/updateInbox/${id}`, {text, subject, date}).then(results => {
            this.props.defineTasks(results.data)
        })
    }
    onClose = () => {
        this.setState({visible: false})
      }
      
      showCreateTask = () => {
        this.setState({visible: !this.state.visible})
      }

    render() {
        return(
            <div>
 
    <h4 className="createIcon">New Task: </h4>
    <Icon onClick={this.showCreateTask} style={{fontSize: '30px'}}className="create" type="file-add" />
    <CreateNew visible={this.state.visible} onClose={this.onClose}/>
            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    defineTask(tasks) {
        dispatch({
            type: 'GET_TASKS',
            payload: tasks
        })
    }
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Inbox)