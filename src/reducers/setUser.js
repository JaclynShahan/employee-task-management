const initialState = {
    user: { // static user data
        create_date: null, // just remember to delete all of this later
        email: "chrisfoster@yahoo.com",
        first_name: "Chris",
        last_name: "Foster",
        password: "christopher",
        user_id: 4,
        username: "Cfoster"
    },
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