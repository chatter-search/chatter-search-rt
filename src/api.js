/**
 * @module api
 * @description Calls api endpoints
 */

import $ from 'jquery'

class DataFlow {
	fetchAll (data) {
		var userShowDfd = $.get(
			'https://chatter-search-api.herokuapp.com/1.2.0/user_show',
			data
		)

		var userTimelineDfd = $.get(
			'https://chatter-search-api.herokuapp.com/1.2.0/user_timeline',
			data
		)

		return Promise.all([userShowDfd, userTimelineDfd])
	}
}

export default DataFlow
