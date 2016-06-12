/**
 * @module reducers/userData
 */

const DEFAULT_STATE = {
  isFetching: false,
  query: null,
  data: {}
}

function userData (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RESET_USER_DATA':
      return Object.assign({}, state, DEFAULT_STATE)
    case 'REQUEST_USER_DATA':
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        data: {}
      })
    case 'RECEIVE_USER_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

export default userData
