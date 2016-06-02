/**
 * @module containers/searchForm
 * @description Search form with bird, magnifier and things
 */

import { connect } from 'react-redux'
import { fetchUserData, resetUserData, toggleForm } from '../actions'
import SearchForm from '../components/searchForm'

import $ from 'jquery'
import '../plugins/serializeObject'

const mapStateToProps = (state) => {
  return {
    isFetching: state.userData.isFetching,
    isFormExpanded: state.isFormExpanded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit (ev) {
      ev.preventDefault()
      var query = $(ev.target).serializeObject()
      dispatch(fetchUserData(query))
    },
    onReset (ev) {
      dispatch(toggleForm())
    }
  }
}

const SearchFormCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default SearchFormCont
