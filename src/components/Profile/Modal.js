import React, { Component } from 'react';
import './Profile.css';
import { timeout } from 'q';


class Modal extends Component {
    constructor() {
        super()
        this.state = {
           
        }
    }
    onOk = () => {
        this.setState({visible: false})
    }
changeModal = () => {
    if (this.props.visible == true) {
        return "visible"
    } return "hidden"
}


    render() {
        console.log(this.props.visible)
        return(
            
            <div className="modal" style={{visibility: this.changeModal()}}>
            
                <div className="modal-content" style={{visibility: this.changeModal()}} onClose={this.props.onClose}>
                <button onClick={this.onOk}>OK</button>
                <button onClick={this.props.onClose}>CLOSE</button>
                </div>
            </div>
            
        )
    }
}

export default Modal;