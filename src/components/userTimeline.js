/**
 * @module components/userTimeline
 * @description Render user timeline with sort/filter ability
 */

import React, { PropTypes } from 'react'
import UserTimelineContent from './userTimelineContent'
import UserTimelineToolbar from './userTimelineToolbar'

const UserTimeline = (props) => {
  let {tweets} = props
  return (
    tweets
      ? <div className='user-timeline-items'>
        <UserTimelineToolbar {...props}/>
        <div className='user-timeline-content'>
            {tweets.length
              ? tweets.map((item, ix) => <UserTimelineContent key={ix} {...item} />)
              : <section className='user-timeline-item'>
                <div className='user-timeline-text'>Nothing matched your criteria.</div>
                <div className='clear'></div>
              </section>
            }
        </div>
      </div>
    : null
  )
}

UserTimeline.PropTypes = {
  tweets: PropTypes.object
}

export default UserTimeline
