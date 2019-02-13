import { Map } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
const TODO_ADD = 'TODO/ADD'

// ------------------------------------
// Actions
// ------------------------------------
export const todoAdd = payload => ({
  type: TODO_ADD,
  payload: payload
})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map({
	list: [],
})

export default function (state = initialState, { type, payload }) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (type) {
    case TODO_ADD:
      return state.merge({list: [...state.get('list'), payload]})
    default:
      return state
  }
}