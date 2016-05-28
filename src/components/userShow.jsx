/**
 * @module components/userShow
 * @description Presents basic user information as avatar, twitter id name and bio
 */

import React, {Component} from 'react'
import classNames from 'classnames'

class UserShow extends Component {
	render () {
		var data = this.props.data
		return (
			data ? (
				<div id="user-show">
					<div className="profile-card">
						{data.profile_image_url_https && <img src={data.profile_image_url_https} alt={data.name} />}
						<div>{data.name}<span>@{data.screen_name}</span></div>
						{data.description && <div className="profile-description">{data.description}</div>}
					</div>
				</div>
			) : null
		)
	}
}

export default UserShow
