/**
 * @module reducers/visibilityFilter
 */

const DEFAULT_FILTERS = {
  SHOW_WITH_IMAGES: false,
  SHOW_WITH_RETWEETS: 0
}
function visibilityFilter (state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, action.filter)
    case 'RESET_VISIBILITY_FILTER':
      return Object.assign({}, state, DEFAULT_FILTERS)
    default:
      return state
  }
}

export default visibilityFilter
