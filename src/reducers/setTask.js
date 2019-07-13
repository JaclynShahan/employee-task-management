import { bindActionCreators } from "../../../../../Library/Caches/typescript/3.2/node_modules/redux";

const initialState = {
    tasks: {
       tasks_id: 8,
       tasks_body: "I need this done please",
       creator_id: 9,
       create_date: "2/16/2019",
       parent_task_id: 7,
       expiry_date: "5/16/2019",
       is_reminder: 1,
       next_remind_date: "3/16/2019",
       reminder_frequency_id: 2
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