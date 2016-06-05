/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchFormCont from '../containers/searchFormCont'
import UserShowCont from '../containers/userShowCont'
import UserTimelineCont from '../containers/userTimelineCont'

let App = () => {
  return (
    <main>
      <SearchFormCont />
      <UserShowCont />
      <UserTimelineCont />
    </main>
  )
}

export default App
