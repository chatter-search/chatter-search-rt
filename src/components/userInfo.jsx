/**
 * @module components/userInfo
 * @description Presents basic user information as avatar, twitter id name and bio
 */

import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class UserInfo extends React.Component {
	render () {
		var data = this.props.data
		return (
			<div class="profile-card">
				{data.profile_image_url_https && <img src={data.profile_image_url_https} alt={data.name} />}
				<div>{data.name}<span>@{data.screen_name}</span></div>
				{data.description && <div class="profile-description">{data.description}</div>}
			</div>
		)
	}
}

export default UserInfo
