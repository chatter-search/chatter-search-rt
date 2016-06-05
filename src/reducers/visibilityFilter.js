/**
 * @module reducers/visibilityFilter
 */

import { assign } from 'lodash'

const DEFAULT_FILTERS = {
  SHOW_WITH_IMAGES: false,
  SHOW_WITH_RETWEETS: 0
}
function visibilityFilter (state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return assign({}, state, action.filter)
    case 'RESET_VISIBILITY_FILTER':
      return assign({}, state, DEFAULT_FILTERS)
    default:
      return state
  }
}

export default visibilityFilter
