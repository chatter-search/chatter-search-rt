/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'
import { assign } from 'lodash'

import * as actions from '../actions'

const SHOW_WITH_IMAGES = actions.VisibilityFilters.SHOW_WITH_IMAGES
const SHOW_WITH_RETWEETS = actions.VisibilityFilters.SHOW_WITH_RETWEETS

const SET_VISIBILITY_FILTER = actions.SET_VISIBILITY_FILTER

const RESET_USER_DATA = actions.RESET_USER_DATA
const REQUEST_USER_DATA = actions.REQUEST_USER_DATA
const RECEIVE_USER_DATA = actions.RESET_USER_DATA

/* Shape for the state data
  {
    visibilityFilter: {
      [SHOW_WITH_IMAGES]: false,
      [SHOW_WITH_RETWEETS]: 0
    },
    userData: {
      isFetching: false,
      query: null,
      data: {
        ...
      }
    },
    userTweets: [
      {
        ...
      },
      ...
    ]
  }

*/

const DEFAULT_FILTERS = {
  [SHOW_WITH_IMAGES]: false,
  [SHOW_WITH_RETWEETS]: 0
}
function visibilityFilter (state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return assign({}, state, action.filter)
    default:
      return state
  }
}

function userData (state = {}, action) {
  switch (action.type) {
    case RESET_USER_DATA:
      return assign({}, state, {
        isFetching: true,
        query: null,
        data: {}
      })
    case REQUEST_USER_DATA:
      return assign({}, state, {
        isFetching: true,
        query: action.query,
        data: {}
      })
    case RECEIVE_USER_DATA:
      return assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

const chatterApp = combineReducers({
  visibilityFilter,
  userData
})

export default chatterApp
