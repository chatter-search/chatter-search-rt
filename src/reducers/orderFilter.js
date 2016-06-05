/**
 * @module reducers/sortFilter
 */

import { assign } from 'lodash'

const DEFAULT_STATE = {
  ORDER_BY: 'created_at_timestamp',
  ORDER_DIR: 'desc' /* 'asc' 'desc' */
}
function orderByFilter (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'SET_ORDER_FILTER':
      return assign({}, state, action.filter)
    case 'RESET_ORDER_FILTER':
      return assign({}, state, DEFAULT_STATE)
    default:
      return state
  }
}

export default orderByFilter
