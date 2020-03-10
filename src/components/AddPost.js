import React, { Component } from 'react'

class AddPost extends Component {
	state = {
		title: null,
		category: null,
		newPost: null,
	}

	handleChange = e => {
		e.preventDefault()
		this.setState({
			[e.target.id]: e.target.value, //id from form-input in html
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addPost(this.state) //function from  App
		console.log(this.state)
	}
	render() {
		return (
			<div className='form-container'>
				<form onSubmit={this.handleSubmit}>
					<h1>New Post</h1>
					<div className='form-inner'>
						<div className='input-holder'>
							<span className='label'> Title:</span>
							<input
								className='input-text'
								type='text'
								id='title'
								onChange={this.handleChange}
							/>
						</div>

						<div className='input-holder'>
							<span className='label'> Category:</span>
							<input
								className='input-text'
								type='text'
								id='category'
								onChange={this.handleChange}
							/>
						</div>

						<div className='input-holder'>
							<span className='label'> Write new post:</span>
							<textarea
								className='input-text'
								value={this.state.value}
								type='text'
								id='newPost'
								cols='30'
								rows='10'
								onChange={this.handleChange}></textarea>
						</div>
						<button className='postBtn'>Post</button>
						<button>Cancel</button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddPost
