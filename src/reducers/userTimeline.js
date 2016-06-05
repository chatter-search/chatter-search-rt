/**
 * @module reducers/userTimeline
 */

import { assign } from 'lodash'

const DEFAULT_STATE = {
  isFetching: false,
  query: null,
  data: null
}

function userTimeline (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RESET_USER_TIMELINE':
      return assign({}, state, DEFAULT_STATE)
    case 'REQUEST_USER_TIMELINE':
      return assign({}, state, {
        isFetching: true,
        query: action.query,
        data: null
      })
    case 'RECEIVE_USER_TIMELINE':
      return assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

export default userTimeline
