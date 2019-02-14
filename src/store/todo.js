import { Map } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
const TODO_ADD = 'TODO/ADD'
const TODO_REMOVE = 'TODO/REMOVE'

// ------------------------------------
// Actions
// ------------------------------------
export const todoAdd = payload => ({
  type: TODO_ADD,
  payload: payload
})

export const todoRemove = payload => ({
  type: TODO_REMOVE,
  payload: payload
})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map({
	list: [
  ],
})

export default function (state = initialState, { type, payload }) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (type) {
    case TODO_ADD:
      return state.merge({list: [...state.get('list'), payload]})
    case TODO_REMOVE:
      return state.set('list', state.get('list').filter(o => o._id !== payload))
    default:
      return state
  }
}