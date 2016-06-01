/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import * as actions from '../actions'
import { combineReducers } from 'redux'

const SHOW_ALL = actions.VisibilityFilters.SHOW_ALL
const SET_VISIBILITY_FILTER = actions.SET_VISIBILITY_FILTER
const RESET_USER_DATA = actions.RESET_USER_DATA

/* Shape for the state data
	
	{
		visibilityFilter: 'SHOW_ALL',
		userData: {
			...
		},
		userTimeline: [
			{
				...
			},
			....
		]
	}

*/

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function resetUserData (state = {}, action) {
  switch (action.type) {
    case RESET_USER_DATA:
      return {}
    default:
      return state
  }
}

const chatterApp = combineReducers({
	visibilityFilter,
	resetUserData
})

export default chatterApp
