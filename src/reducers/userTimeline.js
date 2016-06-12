/**
 * @module reducers/userTimeline
 */

const DEFAULT_STATE = {
  isFetching: false,
  query: null,
  data: null
}

function userTimeline (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RESET_USER_TIMELINE':
      return Object.assign({}, state, DEFAULT_STATE)
    case 'REQUEST_USER_TIMELINE':
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        data: null
      })
    case 'RECEIVE_USER_TIMELINE':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

export default userTimeline
