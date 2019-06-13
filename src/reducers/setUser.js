const initialState = {
    user: {},
    searchUser: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_USER':
          return { ...state, user: action.payload }
        
          case 'SEARCH_USER':
          return {...state, user: action.payload }

        default:
          return state
      }
}