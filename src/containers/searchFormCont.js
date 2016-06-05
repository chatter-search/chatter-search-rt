/**
 * @module containers/searchFormCont
 * @description Search form with bird, magnifier and things
 */

import { connect } from 'react-redux'
import {
  fetchUserData,
  fetchUserTimeline,
  resetUserData,
  resetUserTimeline,
  toggleForm
} from '../actions'
import SearchForm from '../components/searchForm'

import $ from 'jquery'
import '../plugins/serializeObject'

const mapStateToProps = (state) => {
  return {
    isFetching: state.userData.isFetching || state.userTimeline.isFetching,
    isFormExpanded: state.isFormExpanded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit (ev) {
      ev.preventDefault()
      let query = $(ev.target).serializeObject()
      dispatch(fetchUserData(query))
      dispatch(fetchUserTimeline(query))
    },
    onReset (ev) {
      let form = $(ev.target)
      if (form.hasClass('expanded')) {
        form.find('input').focus()
      } else {
        form.find('input').blur()
      }
    },
    onClickReset (ev) {
      dispatch(resetUserTimeline())
      dispatch(resetUserData())
      dispatch(toggleForm())
    }
  }
}

const SearchFormCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default SearchFormCont
