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

const chatterApp = combineReducers({
  visibilityFilter,
  orderFilter,
  userData,
  userTimeline,
  isFormExpanded
})

export default chatterApp
