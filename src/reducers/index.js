import { combineReducers } from 'redux'
import authReducer from './auth'
import CurrentusersReducer from './Currentusers'
import questionReducer from './questions'
import usersReducer from './users'

export default combineReducers({
    authReducer, CurrentusersReducer, questionReducer, usersReducer
})