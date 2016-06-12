/**
 * @module components/userTimelineToolbar
 * @description Toolbar for sorting/filtering and other timeline manipulations.
 */

import React, { PropTypes } from 'react'

let noop = () => null

const UserTimelineToolbar = ({
  filterWithImages,
  filterWithRetweets,
  retweetCount,
  hasImage,
  filterOrderDir,
  filterOrderBy,
  orderDir,
  orderIt
}) => (
  <form className='user-timeline-toolbar'>
    <label>
      Has image:<input
        type='checkbox'
        name='filter-has-image'
        value='true'
        checked={hasImage ? 'checked' : null}
        onChange={(ev) => filterWithImages(ev.target.checked)}
      />
    </label>
    <label>
      Minimal number of retweets:<input
        type='number'
        min='0'
        step='1'
        value={retweetCount}
        name='filter-retweet-count'
        onChange={(ev) => filterWithRetweets(Number(ev.target.value))}
      />
    </label>
    <radiogroup onChange={(ev) => filterOrderBy(ev.target.value)}>
      <label>
        Sort by date:<input
          type='radio'
          checked={orderIt === 'created_at_timestamp' ? 'checked' : null}
          value='created_at_timestamp'
          onChange={noop}
          name='sort-by'
        />
      </label>
      <label>
        Sort by length:<input
          type='radio'
          checked={orderIt === 'text_length' ? 'checked' : null}
          value='text_length'
          onChange={noop}
          name='sort-by'
        />
      </label>
    </radiogroup>
    <label>
      Sort direction:<input
        type='checkbox'
        name='sort-direction'
        value='true'
        checked={orderDir === 'desc' ? 'checked' : null}
        onChange={(ev) => filterOrderDir(ev.target.checked)}
      />
    </label>
  </form>
)

UserTimelineToolbar.PropTypes = {
  filterWithImages: PropTypes.func.isRequired
}

export default UserTimelineToolbar

