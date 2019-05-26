import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
import setUser from './reducers/setUser'


export default createStore(
  combineReducers({
    setUser
  }),
  applyMiddleware(promiseMiddleware)
)