import { combineReducers } from 'redux'
import { reducer as notificationReducer } from 'module/notification'

import todoReducer from './todo'

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    todo: todoReducer,
    notification: notificationReducer
  })
}

export default makeRootReducer
