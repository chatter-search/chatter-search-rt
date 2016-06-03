/**
 * @module reducers/isFormExpanded
 */

function isFormExpanded (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return !state
    default:
      return state
  }
}

export default isFormExpanded
