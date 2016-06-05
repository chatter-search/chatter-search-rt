/**
 * @module containers/userTimelineCont
 */

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import UserTimeline from '../components/userTimeline'
import { has } from 'lodash'

const getVisibleTweets = (tweets, filter) => {
  if (tweets && filter['SHOW_WITH_IMAGES']) {
    tweets = tweets.filter((t) => has(t, 'photos'))
  }
  if (tweets && filter['SHOW_WITH_RETWEETS']) {
    var limit = filter['SHOW_WITH_RETWEETS']
    tweets = tweets.filter((t) => t.retweets >= limit)
  }
  return tweets
}

const mapStateToProps = (state) => {
  return {
    tweets: getVisibleTweets(state.userTimeline.data, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterWithImages: (val) => {
      dispatch(setVisibilityFilter({
        SHOW_WITH_IMAGES: val
      }))
    }
  }
}

const UserTimelineCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTimeline)

export default UserTimelineCont
