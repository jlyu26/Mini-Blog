import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>	
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{field.meta.error}
			</div>
		);
	}

	// Redux form side: go through validation process
	// Our side: take the validated data (values) and send it to back-end derver

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			// handleSubmit() takes a function we defined (`this.onSubmit` in this case), and run the
			// Redux form side of thing like validation,
			// then if data is valid, go back and call the callback function passed into it previously,
			// and passes us the values out of form to work with
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					// `name` property specifies what piece of state this Field is going to produce
					name="title"
					// `component` property add a function that returns JSX to show this Field on the screen
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field 
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	// `values` is an object that contains all the values that a user has entered
	// into the form.
	// console.log(values) -> { title: '...', categories: '...', content: '...' }
	// ... will be whatever user filled in the corresponding input


	// Validate the inputs from 'values'
	const errors = {};
	if (!values.title) {
		errors.title = "Enter a title!";
	}

	// ↓↓↓ Following codes will cause error 'Cannot read property 'length' of undefined'
	// if (values.title.length < 3) {
	// 	errors.title = "Title must be as least 3 characters";
	// }

	if (!values.categories) {
		errors.categories = 'Enter some categories';
	}
	if (!values.content) {
		errors.content = 'Enter some content please';
	}

	// If errors is empty, the form is fine to submit
	// If errors has any properties, Redux assumes form in invalid
	return errors;
}

// usage of reduxForm() similar to connect()() helper.
// To show multiple different forms on a page at a single time,
// by providing a unique string, we ensure Redux form will handle
// those different forms correctly
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);