/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchForm from './searchForm'
import UserShow from './userShow'

var dispatcher = {}
var userData

class App extends React.Component {
  render () {
    return (
	    <main>
	    	<SearchForm triggerSearch={dispatcher.triggerSearch} />
	    	{userData && <UserShow data={userData} />}
	    </main>
    )
  }
}

export default App
