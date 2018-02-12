import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
	componentDidMount() {
		// `match` here is the top level of property,
		// the `params` property inside of it is an boject that lists all
		// the different wildcard tokens that exist in the URL
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');	// navigate user back to list
		});
	}

	render() {
		const { post } = this.props;

		if(!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back To Index</Link>
				<button
					className="btn btn-danger float-sm-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	// Instead of `post`, which is the big list of all posts,
	// `ownProps` is the props object that is going to the
	// component PostShow. We can say this.props === ownProps.
	// Because PostShow component only cars about the single post
	// that matches the given id from URL. 
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostShow);