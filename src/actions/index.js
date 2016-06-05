/**
 * @module actions/index
 *
 */

import { get } from 'jquery'

export function toggleForm () {
  return { type: 'TOGGLE_FORM' }
}

export function setVisibilityFilter (filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

/* request user data */
export function requestUserData (query) {
  return { type: 'REQUEST_USER_DATA', query }
}

export function receiveUserData (data) {
  return { type: 'RECEIVE_USER_DATA', data }
}

export function resetUserData () {
  return { type: 'RESET_USER_DATA' }
}

export function fetchUserData (query) {
  return function (dispatch) {
    dispatch(requestUserData(query))
    let data = query
    return get(
      'https://chatter-search-api.herokuapp.com/1.2.0/user_show',
      data
    )
    .then(
      (data) => {
        dispatch(receiveUserData(data))
      }
    )
  }
}

/* request user timeline */
export function requestUserTimeline (query) {
  return { type: 'REQUEST_USER_TIMELINE', query }
}

export function receiveUserTimeline (data) {
  return { type: 'RECEIVE_USER_TIMELINE', data }
}

export function resetUserTimeline () {
  return { type: 'RESET_USER_TIMELINE' }
}

export function fetchUserTimeline (query) {
  return function (dispatch) {
    dispatch(requestUserTimeline(query))
    let data = query
    return get(
      'https://chatter-search-api.herokuapp.com/1.2.0/user_timeline',
      data
    )
    .then(
      (data) => {
        dispatch(receiveUserTimeline(data))
      }
    )
  }
}
