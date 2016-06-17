/**
 * @module components/imageItem
 * @description Single image wraped up in the link, used for userTimelineContent
 */

import React, {Component} from 'react'

class ImageItem extends Component {
  render () {
    var data = this.props.data
    return (
      <a href={data.url}>
        <img src={data.media_url_https} alt={data.text} />
      </a>
    )
  }
}

export default ImageItem
