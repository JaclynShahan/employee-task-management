import React, { Component } from 'react';
import './Tasks.css';
import { Icon } from 'antd';


class CreateNew extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onOkay = () => {
        this.setState({visible: false})
    }

   createModal = () => {
       if (this.props.visible == true) {
           return "visible"
       } return "hidden"
   } 

    render() {
        return(
            <div style={{visibility: this.createModal()}}>
            <div className="createModal">
                <Icon onClick={this.props.onClose} className= "exitIcon" type="close"/>
                <input 
                className="createInputs"
                placeholder="Subject"
                />
               <input
               className="createInputs"
               placeholder="Send To"
               />
               <form className="createForm">

               </form>
               <button className="createButtons createOk" onClick={this.onOkay}>OK</button>
               <button className="createButtons" onClose={this.props.onClose}>CLOSE</button>

            </div>

            </div>
        )
    }
}

export default CreateNew;