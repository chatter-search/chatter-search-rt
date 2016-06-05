/**
 * @module components/userShow
 * @description Presents basic user information as avatar, twitter id name and bio
 */

import React, { PropTypes } from 'react'

const UserShow = ({ userData }) => {
  let { profile_image_url_https, name, screen_name, description } = userData
  return screen_name ? (
    <div id='user-show'>
      <div className='profile-card'>
        {profile_image_url_https && <img src={profile_image_url_https} alt={name} />}
        <div>{name}<span>@{screen_name}</span></div>
        {description && <div className='profile-description'>{description}</div>}
      </div>
    </div>
  ) : null
}

UserShow.propTypes = {
  userData: PropTypes.object
}

export default UserShow
