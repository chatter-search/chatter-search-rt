/**
 * @module api
 * @description Calls api endpoints
 */

import $ from 'jquery'

class DataFlow {
	fetchAll (data) {
		var userShowDfd = this.fetchUser(data)
		var userTimelineDfd = this.fetchTimeline(data)

		return Promise.all([userShowDfd, userTimelineDfd])
	}

	fetchUser (data) {
		return $.get(
			'https://chatter-search-api.herokuapp.com/1.2.0/user_show',
			data
		)
	}

	fetchTimeline (data) {
		return $.get(
			'https://chatter-search-api.herokuapp.com/1.2.0/user_timeline',
			data
		)
	}
}

export default DataFlow
