/**
 * @module containers/userTimelineCont
 */

import { connect } from 'react-redux'
import { setVisibilityFilter, setOrderFilter } from '../actions'
import UserTimeline from '../components/userTimeline'
import { has, orderBy } from 'lodash'

const getVisibleTweets = (tweets, hasImage, retweetsThreshold) => {
  if (hasImage) {
    tweets = tweets.filter((t) => has(t, 'photos'))
  }
  if (retweetsThreshold) {
    tweets = tweets.filter((t) => t.retweet_count >= retweetsThreshold)
  }
  return tweets
}
const getOrderedTweets = (tweets, orderIt, orderDir) => {
  return orderBy(tweets, orderIt, orderDir)
}

const mapStateToProps = (state) => {
  let tweets = state.userTimeline.data
  let hasImage = state.visibilityFilter.SHOW_WITH_IMAGES
  let retweetCount = state.visibilityFilter.SHOW_WITH_RETWEETS
  tweets = tweets && getVisibleTweets(tweets, hasImage, retweetCount)
  let orderIt = state.orderFilter.ORDER_BY
  let orderDir = state.orderFilter.ORDER_DIR
  tweets = tweets && getOrderedTweets(tweets, orderIt, orderDir)
  return {
    tweets,
    retweetCount,
    hasImage,
    orderIt,
    orderDir
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterWithImages (val) {
    dispatch(setVisibilityFilter({
      SHOW_WITH_IMAGES: val
    }))
  },
  filterWithRetweets (val) {
    dispatch(setVisibilityFilter({
      SHOW_WITH_RETWEETS: val
    }))
  },
  filterOrderDir (val) {
    let ORDER_DIR = val ? 'desc' : 'asc'
    dispatch(setOrderFilter({
      ORDER_DIR
    }))
  }
})

const UserTimelineCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTimeline)

export default UserTimelineCont
