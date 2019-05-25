import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'



export default createStore(
  combineReducers({
    
  }),
  applyMiddleware(promiseMiddleware)
)