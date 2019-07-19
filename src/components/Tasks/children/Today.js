import React, { Component } from 'react';
import '../Tasks.css';
import {Badge} from'antd';

class Today extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
    <Badge showZero>
      <a href="#" />
    </Badge>

            </div>
        )
    }
}

export default Today;
