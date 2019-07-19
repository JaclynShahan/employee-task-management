import { bindActionCreators } from "../../../../../Library/Caches/typescript/3.2/node_modules/redux";

const initialState = {
    tasks: {
       tasksId: 8,
       tasksBody: "I need this done please",
       creatorId: 9,
       createDate: "2/16/2019",
       parentTaskId: 7,
       expiryDate: "5/16/2019",
       isReminder: 1,
       nextRemindDate: "3/16/2019",
       reminderFrequencyId: 2,
       userId: 5,
       tasksSubject: "New Task "
    },
    searchTask: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_TASKS':
            return {...state, tasks: action.payload}

        case 'SEARCH_TASKS':
            return {...state, tasks: action.payload}
        
        default:
         return state   
    }
}