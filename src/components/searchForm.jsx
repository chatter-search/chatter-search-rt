/**
 * @module components/searchForm
 * @description Search form with bird, magnifier and things
 */

import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class SearchForm extends React.Component {
	searchButton () {
		var screenName = ReactDOM.findDOMNode(this.refs.screenName)
		if (this.state.isExpanded)
			screenName.blur()
		else
			screenName.focus()

		this.setState({
			isExpanded: !this.state.isExpanded,
			isLoading: false
		})
	}
	submitForm (e) {
		e.preventDefault()
		this.setState({
			isLoading: true
		})
	}
	componentWillMount () {		
		this.setState({
			isExpanded: false,
			isLoading: false
		})
	}
	render () {
		var formClasses = classNames({
			'search-bar': true,
			'expanded': this.state.isExpanded
		})
		var birdClasses = classNames({
			'twitter': true,
			'loading': this.state.isLoading
		})
		return (
			<div id="search-form">
			    <div className="container">
				 	<div className={birdClasses}></div>
				</div>
				<form onSubmit={this.submitForm.bind(this)} className={formClasses} autocomplete="off">
				  <input type="text" name="screen_name" ref="screenName" className="input" autoComplete="off" />
				  <button onClick={this.searchButton.bind(this)} type="reset" className="search"></button>
				</form>
			</div>
		)
	}
}

export default SearchForm
