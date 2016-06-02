/**
 * @module components/userTimeline
 * @description Render user timeline with sort/filter ability
 */

import React, { PropTypes } from 'react'
import UserTimelineContent from './userTimelineContent'
import UserTimelineToolbar from './userTimelineToolbar'

const UserTimeline = ({data}) => {
  return (
    data
      ? <div className='user-timeline-items'>
        <UserTimelineToolbar />
        <div className='user-timeline-content'>
            {data.length
              ? data.map((item, ix) => <UserTimelineContent key={ix} {...item} />)
              : <section className='user-timeline-item'>
                <div className='user-timeline-text'>This user does not have any tweets.</div>
                <div className='clear'></div>
              </section>
            }
        </div>
      </div>
    : null
  )
}

UserTimeline.PropTypes = {
  data: PropTypes.object
}

export default UserTimeline
