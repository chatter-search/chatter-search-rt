/**
 * @module actions/index
 *
 */

/*
 * action types
 */

export const FETCH_DATA = 'FETCH_DATA'
export const RESET_USER_DATA = 'RESET_USER_DATA'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WITH_IMAGES: 'SHOW_WITH_IMAGES',
  SHOW_WITH_RETWEETS: 'SHOW_WITH_RETWEETS'
}

/*
 * action creators
 */

export function fetchData(data) {
  return { type: FETCH_DATA, data }
}

export function resetUserData() {
  return { type: RESET_USER_DATA}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
