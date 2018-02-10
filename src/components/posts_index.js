import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	// will automatically called by React immediately AFTER this component
	// has shown up inside the DOM. That makes it a perfect location to 
	// go and fetch some data, or initiate some one-time loading procedure.
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}

	render() {
		// console.log(this.props.posts);
		return (
			<div>
				<div className="text-sm-right">
					{/* Link component from react-router-dom*/}
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

// To consume anything from application level state, we always define 
// mapStateToProps() function
function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// Instead of defining a separate mapDispatchToProps() function, 
	// function mapDispatchToProps(dispatch) {
	// 	return bindActionCreators({ fetchPosts }, dispatch);
	// }
	// export default connect(null, mapDispatchToProps)(PostIndex);
// For the second argument of connect()(PostIndex) we are going to pass in the
// action creator itselt inside of an object.
// mapDispatchToProps() is used when we want to do some computation on exactly how to
// call the action creator.