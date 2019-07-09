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
            
            <div style={{visibility: this.changeModal()}}>
            
                <div className="modal" style={{visibility: this.changeModal()}} onClose={this.props.onClose}>
                <div className="modal-content">
                <button className="modalButton">Edit Photo</button>
                <br></br>
                <br></br>
                <button className="modalButton">Edit Info</button>
                <br></br>
                <br></br>
                <button className="iconButtons ok" onClick={this.onOk}>OK</button>
                <button className="iconButtons" onClick={this.props.onClose}>CLOSE</button>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Modal;