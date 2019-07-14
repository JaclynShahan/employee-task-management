import React, { Component } from 'react';
import './Tasks.css';


class createNew extends Component {
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
            <div>
                <input 
                placeholder="Subject"
                />
               <input
               placeholder="Send To"
               />
               <form>

               </form>
               <button onClick={this.onOkay}>OK</button>
               <button onClose={this.props.onClose}>CLOSE</button>

            </div>

            </div>
        )
    }
}

export default createNew;