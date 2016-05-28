/**
 * @module components/userTimelineContent
 * @description Renders user timeline item
 */


import React, {Component} from 'react'
import moment from 'moment'
import ImageItem from './imageItem'

class UserTimeline extends Component {
	render () {
		var data = this.props.data
		return (
			<section className="user-timeline-item">
		        <time className="twitted-at clear" datetime="{data.created_at}">
		        	{moment(data.created_at_timestamp).fromNow()}
		        </time>
				{data.photos && data.photos.map((item, ix) => <ImageItem key={ix} data={item} />)}
				<div className="user-timeline-text">{data.text}</div>
				<div className="clear"></div>
			</section>
		)
	}
}

export default UserTimeline
