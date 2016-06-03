/**
 * @module containers/getVisibleTweets
 */

import { connect } from 'react-redux'
import { setVisiblityFilter } from '../actions'
import UserTimelineContent from '../components/userTimelineContent'

const getVisibleTweets = (tweets, filter) => {
  if (filter['SHOW_WITH_IMAGES']) {
    tweets = tweets.filter((t) => t.hasImage)
  }
  if (filter['SHOW_WITH_RETWEETS']) {
    var limit = filter['SHOW_WITH_RETWEETS']
    tweets = tweets.filter((t) => t.retweets >= limit)
  }
  return tweets
}

const mapStateToProps = (state) => {
  return {
    tweets: getVisibleTweets(state.userTweets, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (val) => {
      dispatch(setVisiblityFilter(val))
    }
  }
}

const VisibleTweetsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTimelineContent)

export default VisibleTweetsList
