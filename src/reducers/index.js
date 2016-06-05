/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import orderFilter from './orderFilter'
import userData from './userData'
import userTimeline from './userTimeline'
import isFormExpanded from './isFormExpanded'

/* Shape for the state data
  {
    visibilityFilter: {
      SHOW_WITH_IMAGES: false,
      SHOW_WITH_RETWEETS: 0
    },
    orderFilter: {
      ORDER_BY: 'created_at_timestamp',
      SORT_ORDER: 'desc'
    },
    isFormExpanded: false,
    userData: {
      isFetching: false,
      query: null,
      data: {}
    },
    userTimeline: {
      isFetching: false,
      query: null,
      data: null
    }
  }

*/

const chatterApp = combineReducers({
  visibilityFilter,
  orderFilter,
  userData,
  userTimeline,
  isFormExpanded
})

export default chatterApp
