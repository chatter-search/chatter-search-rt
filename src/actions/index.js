/**
 * @module actions/index
 *
 */

/*
 * action types
 */

import { get } from 'jquery'

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA'
export const RESET_USER_DATA = 'RESET_USER_DATA'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_FORM = 'TOGGLE_FORM'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_WITH_IMAGES: 'SHOW_WITH_IMAGES',
  SHOW_WITH_RETWEETS: 'SHOW_WITH_RETWEETS'
}

/*
 * action creators
 */

export function requestUserData (query) {
  return { type: REQUEST_USER_DATA, query }
}

export function receiveUserData (data) {
  return { type: RECEIVE_USER_DATA, data }
}

export function resetUserData () {
  return { type: RESET_USER_DATA }
}

export function toggleForm () {
  return { type: TOGGLE_FORM }
}

export function setVisibilityFilter (filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

/* async actions */

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
