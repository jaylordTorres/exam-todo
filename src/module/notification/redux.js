// ------------------------------------
// Constants
// ------------------------------------
const NOTIFICATION_ADD = 'NOTIFICATION/ADD'
const NOTIFICATION_REMOVE = 'NOTIFICATION/REMOVE'

// ------------------------------------
// Actions
// ------------------------------------
let _id = 0

export const notificationAdd = (payload) => ({
  type: NOTIFICATION_ADD,
  payload: {...payload, _id: ++_id}
})

export const notificationRemove = (payload) => ({
  type: NOTIFICATION_REMOVE,
  payload: payload
})


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: [],
}

export default function (state = initialState, { type, payload }) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (type) {
    case NOTIFICATION_ADD:
      return {list: [...state.list, payload]}
    case NOTIFICATION_REMOVE:
      return {list: state.list.filter((item)=> item._id!==payload)}
    default:
      return state
  }
}
