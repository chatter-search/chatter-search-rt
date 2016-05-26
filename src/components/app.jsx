/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchForm from './searchForm'
import UserInfo from './userInfo'

var dispatcher = {}
var userData

class App extends React.Component {
  render () {
    return (
	    <main>
	    	<SearchForm triggerSearch={dispatcher.triggerSearch} />
	    	{userData && <UserInfo data={userData} />}
	    </main>
    )
  }
}

export default App
