/**
 * @module components/userTimelineContent
 * @description Renders user timeline item
 */

import React, { PropTypes } from 'react'
import moment from 'moment'
import ImageItem from './imageItem'

const UserTimelineContent = ({created_at, created_at_timestamp, photos, text}) => (
  <section className='user-timeline-item'>
    <time className='twitted-at clear' datetime='{data.created_at}'>
      {moment(created_at_timestamp).fromNow()}
    </time>
    {photos && photos.map((item, ix) => <ImageItem key={ix} data={item} />)}
    <div className='user-timeline-text'>{text}</div>
    <div className='clear'></div>
  </section>
)

UserTimelineContent.propTypes = {
  created_at: PropTypes.string.isRequired,
  created_at_timestamp: PropTypes.number.isRequired,
  photos: PropTypes.array,
  text: PropTypes.string.isRequired
}

export default UserTimelineContent
