import React from 'react'
//UI (FUNCTIONAL) COMPONENTS
const PostBoard = props => {
	const { posts, deletePost } = props

	const postsList = posts.map(post => {
		return (
			<div className='post' key={post.id}>
				<button>Back to Posts</button>
				<button
					onClick={() => {
						deletePost(post.id)
					}}>
					Delete
				</button>
				<div>Title: {post.title}</div>
				<div>Category: {post.category}</div>
				<div>New Post: {post.newPost}</div>

				<hr />
			</div>
		)
	})
	return <div className='posts-list'>{postsList}</div>
}

export default PostBoard
