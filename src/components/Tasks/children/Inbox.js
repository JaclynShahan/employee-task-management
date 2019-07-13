import React, { Component } from 'react';
import '../Tasks.css';
import { connect } from 'react-redux';
import Axios from 'axios';

class Inbox extends Component {
    constructor() {
        super()
        this.state = {
            tasks: []

        }
    }
    componentDidMount () {
     Axios.get('/api/getTasks').then(results => {
         this.props.defineTasks(results.data)
     })
    }


    render() {
        return(
            <div>

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