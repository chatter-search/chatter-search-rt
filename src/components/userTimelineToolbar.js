/**
 * @module components/userTimelineToolbar
 * @description Toolbar for sorting/filtering and other timeline manipulations.
 */

import React, { PropTypes } from 'react'

import { noop } from 'lodash'

const UserTimelineToolbar = ({filterWithImages}) => (
  <form className='user-timeline-toolbar'>
    <label>
      Has image:<input
        type='checkbox'
        name='filter-has-image'
        value='true'
        onChange={(ev) => filterWithImages(ev.target.checked)}
      />
    </label>
    <label>
      Minimal number of retweets:<input
        type='number'
        min='0'
        step='1'
        value='0'
        name='filter-retweet-count'
        onChange={noop}
      />
    </label>
    <radiogroup onChange={noop}>
      <label>
        Sort by date:<input
          type='radio'
          value='created_at_timestamp'
          name='sort-by'
        />
      </label>
      <label>
        Sort by length:<input
          type='radio'
          value='text_length'
          name='sort-by'
        />
      </label>
    </radiogroup>
    <label>
      Sort direction:<input
        type='checkbox'
        name='sort-direction'
        value='true'
        onChange={noop}
      />
    </label>
  </form>
)

UserTimelineToolbar.PropTypes = {
  filterWithImages: PropTypes.func.isRequired
}

export default UserTimelineToolbar

