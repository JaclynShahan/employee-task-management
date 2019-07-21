import React, { Component } from 'react';
import '../Tasks.css';

class TaskHistory extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div className="searchTasksForm">
                <input 
                className="searchTasksInput"
                />
                <button>Search Tasks</button>

            </div>
        )
    }
}

export default TaskHistory;