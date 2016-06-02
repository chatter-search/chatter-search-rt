/**
 * @module components/app
 * @description Assembles application
 */

import React, {Component} from 'react'
import Api from '../api'
import SearchForm from '../containers/searchForm'
import UserShow from './userShow'
import VisibleTweetsList from '../containers/visibleTweetsList'

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
    let userData = this.state.userData
    return (
      <main>
        <SearchForm />
        {userData && <UserShow {...userData} />}
      </main>
    )
  }
}

export default App
