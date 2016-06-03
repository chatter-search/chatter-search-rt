/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import userData from './userData'
import isFormExpanded from './isFormExpanded'

/* Shape for the state data
  {
    visibilityFilter: {
      [SHOW_WITH_IMAGES]: false,
      [SHOW_WITH_RETWEETS]: 0
    },
    isFormExpanded: false,
    userData: {
      isFetching: false,
      query: null,
      data: {
        ...
      }
    },
    userTweets: {
      isFetching: false,
      query: null,
      data: [
        {
          ...
        },
        ...
      ]
    }
  }

*/

const chatterApp = combineReducers({
  visibilityFilter,
  userData,
  isFormExpanded
})

export default chatterApp
