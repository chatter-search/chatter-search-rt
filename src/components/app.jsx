/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchFormCont from '../containers/searchFormCont'
import UserShowCont from '../containers/userShowCont'

let App = () => {
  return (
    <main>
      <SearchFormCont />
      <UserShowCont />
    </main>
  )
}

export default App
