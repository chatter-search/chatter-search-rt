/**
 * @module components/app
 * @description Assembles application
 */

import React, {Component} from 'react'
import SearchForm from './searchForm'
import Api from '../api'
import UserShow from './userShow'
import UserTimeline from './userTimeline'

import { createStore } from 'redux'
import appRedusers from '../reducers'
var store = createStore(appRedusers)

// Log the initial state

import {setVisibilityFilter, VisibilityFilters} from '../actions'
console.log(store.getState())

var unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_WITH_IMAGES))

// Stop listening to state updates
unsubscribe()

var api = new Api()

class App extends Component {
  componentWillMount () {
  	this.setState({})
  }

  fetchData (query) {
  	return api.fetchAll(query)
		.then((data) => {
			this.setState({
				userData: data[0],
				userTimelineData: data[1]
			})
		})
  }
  resetData () {
  	this.setState({
  		userData: null,
  		userTimelineData: null
  	})
  }
  render () {
    return (
	    <main>
	    	<SearchForm
	    		fetchData={this.fetchData.bind(this)}
	    		resetData={this.resetData.bind(this)} />
	    	<UserShow data={this.state.userData} />
	    	<UserTimeline data={this.state.userTimelineData} />
	    </main>
    )
  }
}

export default App
