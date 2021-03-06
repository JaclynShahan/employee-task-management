import React, { Component } from 'react';
import '../Tasks.css';
import { Icon, Input, DatePicker} from 'antd';
import Axios from 'axios';
import {connect} from 'react-redux';


class CreateNew extends Component {
    constructor() {
        super()
        this.state = {
           tasksBody: '',
          // creatorId: '',
           //createDate: '',
           //parentTaskId: '',
           //expiryDate: '',
           //isReminder: '',
           //nextRemindDate: '',
           //reminderFrequencyId: '',
           userId: '',
           tasksSubject: '',
           size: 'default',
           startValue: null,
           endValue: null,
           endOpen: false,
        }
    }
    makeTask = e => {
        e.preventDefault()
      Axios.post('/api/createTask', {
      tasksBody: this.state.tasksBody,
     // creatorId: this.state.creatorId,
      //createDate: this.state.createDate,
      //parentTaskId: this.state.parentTaskId,
      //expiryDate: this.state.expiryDate,
      //isReminder: this.state.isReminder,
      //nextRemindDate: this.state.nextRemindDate,
      //reminderFrequencyId: this.state.reminderFrequencyId,
      userId: this.state.userId,
      tasksSubject: this.state.tasksSubject,
        //comments: [],
       
      }).then(resp => {
        this.props.defineTask(resp.data)
        console.log(resp)
      })
      }
   onChangeTask = (e, stateProperty) => {
    this.setState({ [stateProperty]: e.target.value})
   }   

    onOkay = () => {
        this.setState({visible: false})
    }

   createModal = () => {
       if (this.props.visible === true) {
           return "visible"
       } return "hidden"
   } 
   handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

    render() {
         const {size, startValue, endValue, endOpen} = this.state;
        const dateExpire = {
            // borderRadius: '20px !important'
            marginTop: '15px',
           // marginLeft: '90px',
            width: '25%',
            zIndex: '7',
           
            
        }
        const InputGroup = Input.Group;
        const { TextArea } = Input
        const { tasksBody, tasksSubject, userId } = this.state
        return(
            <div style={{visibility: this.createModal()}}>
            <form className="createModal">
                <Icon onClick={this.props.onClose} className= "exitIcon" type="close"/>
               
              
               
                {/* <h5 className="spanTitle">Author:</h5>
                <span
                value={this.state.creator_id}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Date:</h5>
                <span
                value={this.state.create_date}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Tasks Expires:</h5>
                <span
                value={this.state.expiry_date}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Reminder Date:</h5>
                <span
                value={this.state.is_reminder}
                onChange={e => this.onChangeTask(e)}
                ></span>
                <h5 className="spanTitle">Next Reminder Date:</h5>
                <span
                value={this.state.next_remind_date}
                onChange={e => this.onChangeTask(e)}
                ></span> */}
                
                <Input 
                className="createInputs createInputs1"
                placeholder="Subject"
                value={tasksSubject}
                onChange={e => this.setState({tasksSubject: e.target.value})}
                />
               <Input
               className="createInputs"
               placeholder="Send To"
               value={userId}
               onChange={e => this.setState({userId: e.target.value})}
               />
             
             <DatePicker
             className="datePickerStyle"
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
       className="datePickerStyle"
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
               <TextArea
               rows={8}
               value={tasksBody}
                onChange={e => this.setState({tasksBody: e.target.value})}
                placeholder="New Task Message..."
                className="createForm"
                />
               <button className="createButtons createOk" onClick={e => this.makeTask(e)}>OK</button>
               <button className="createButtons" onClose={this.onOkay}>CLOSE</button>
            
            </form>

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNew)