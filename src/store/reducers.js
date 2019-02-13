import { combineReducers } from 'redux'
// import locationReducer from './location'

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // location: locationReducer
  })
}

export default makeRootReducer
