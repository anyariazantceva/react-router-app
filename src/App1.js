import React, { Component } from 'react'
import PostBoard from './components/PostBoard'
import AddPost from './components/AddPost'
import './App.css'

//CONTAINER COMPONENT
class App extends Component {
	state = {
		posts: [
			{
				title: 'Day at the office',
				category: 'Work',
				newPost:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
				id: 1,
			},
			{
				title: 'Sushi',
				category: 'Food',
				newPost: '1cup of rice, 2dkg fish',
				id: 2,
			},
		],
	}

	addPost = post => {
		post.id = Math.random()
		let posts = [...this.state.posts, post] //copy of array of posts from above a
		this.setState({
			posts: posts,
		})
	}

	deletePost = id => {
		//takes id of post as parametar
		let posts = this.state.posts.filter(post => {
			return post.id !== id
		})
		this.setState({
			posts: posts,
		})
	}
	render() {
		return (
			<div className='posts-board'>
				<h1>Posts board</h1>
				<h2>Posts of the day!</h2>
				<PostBoard deletePost={this.deletePost} posts={this.state.posts} />
				<AddPost addPost={this.addPost} />
			</div>
		)
	}
}

export default App
