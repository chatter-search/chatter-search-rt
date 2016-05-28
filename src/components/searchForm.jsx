/**
 * @module components/searchForm
 * @description Search form with bird, magnifier and things
 */

import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import classNames from 'classnames'
import $ from 'jquery'
import '../plugins/serializeObject'

class SearchForm extends Component {
	searchButton () {
		var screenName = findDOMNode(this.refs.screenName)
		if (this.state.isExpanded) {
			screenName.blur()
			this.props.resetData()
		} else {
			screenName.focus()
		}

		this.setState({
			isExpanded: !this.state.isExpanded,
			isLoading: false
		})
	}
	submitForm (ev) {
		ev.preventDefault()
		var query = $(ev.target).serializeObject()
		this.setState({
			isLoading: true
		})
		this.props.fetchData(query)
		.then(() => this.setState(
			{
				isLoading: false
			}
		))
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
