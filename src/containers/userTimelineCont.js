/**
 * @module containers/userTimelineCont
 */

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import UserTimeline from '../components/userTimeline'
import { has } from 'lodash'

const getVisibleTweets = (tweets, hasImage, retweetsThreshold) => {
  if (hasImage) {
    tweets = tweets.filter((t) => has(t, 'photos'))
  }
  if (retweetsThreshold) {
    tweets = tweets.filter((t) => t.retweet_count >= retweetsThreshold)
  }
  return tweets
}

const mapStateToProps = (state) => {
  let tweets = state.userTimeline.data
  let hasImage = state.visibilityFilter.SHOW_WITH_IMAGES
  let retweetCount = state.visibilityFilter.SHOW_WITH_RETWEETS
  tweets = tweets && getVisibleTweets(tweets, hasImage, retweetCount)
  return {
    tweets,
    retweetCount,
    hasImage
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterWithImages (val) {
    dispatch(setVisibilityFilter({
      SHOW_WITH_IMAGES: val
    }))
  },
  filterWithRetweets (val) {
    console.log(val)
    dispatch(setVisibilityFilter({
      SHOW_WITH_RETWEETS: val
    }))
  }
})

const UserTimelineCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTimeline)

export default UserTimelineCont
