/**
 * @module components/userTimelineToolbar
 * @description Toolbar for sorting/filtering and other timeline manipulations.
 */

import React, {Component} from 'react'

class UserTimelineToolbar extends Component {
	filterImages () {

	}	
	filterRetweetCount () {

	}	
	sortByCriteria () {

	}	
	sortDirection () {

	}
	render () {
		var data = this.props.data
		return (
			<form className="user-timeline-toolbar">
		        <label>
		            Has image:<input
		            	type="checkbox"
		            	name="filter-has-image"
		            	value="true"
		            	onChange={this.filterImages.bind(this)}
		            />
		        </label>
		        <label>
		            Minimal number of retweets:<input 
		            	type="number"
		            	min="0"
		            	step="1"
		            	value="0"
		            	name="filter-retweet-count"
		            	onChange={this.filterRetweetCount.bind(this)}
		            />
		        </label>
		        <radiogroup onChange={this.sortByCriteria.bind(this)}>
		            <label>
		                Sort by date:<input 
		                	type="radio"
		                	value="created_at_timestamp"
		                	name="sort-by"
		                />
		            </label>
		            <label>
		                Sort by length:<input 
		                	type="radio"
		                	value="text_length"
		                	name="sort-by"
		                />
		            </label>
		        </radiogroup>
		        <label>
		            Sort direction:<input 
		            	type="checkbox"
		            	name="sort-direction"
		            	value="true"
		            	onChange={this.sortDirection.bind(this)}
		            />
		        </label>
		    </form>
		)
	}
}

export default UserTimelineToolbar

