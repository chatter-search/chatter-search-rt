/**
 * @module components/searchForm
 * @description Search form with bird, magnifier and things
 */

import React from 'react'
import classNames from 'classnames'

const SearchForm = ({onSubmit, onReset, isFetching, isFormExpanded}) => {
  var formClasses = classNames({
    'search-bar': true,
    'expanded': isFormExpanded
  })
  var birdClasses = classNames({
    'twitter': true,
    'loading': isFetching
  })
  return (
    <div id='search-form'>
      <div className='container'>
        <div className={birdClasses}></div>
      </div>
      <form onSubmit={onSubmit} className={formClasses} autocomplete='off'>
        <input type='text' name='screen_name' className='input' autoComplete='off' />
        <button onClick={onReset} type='reset' className='search'></button>
      </form>
    </div>
  )
}

export default SearchForm
