{/* <div className='title'>
	<label htmlFor='title'>Title:</label>
	<input
		id='title'
		name={this.state.title}
		// value={this.state.title}
		onChange={this.handleChange}
		onBlur={this.handleBlur}
		placeholder='Title'
		type='text'
	/>
</div> */}

handleTitleInput = e => {
	// const title = e.target.value
	// const currentPost = {
	// 	key: Date.now(),
	// 	title: titleText,
	// 	category: 'new category',
	// 	content: '',
	// }
	// this.setState({
	// 	currentPost,
	// })
	// console.log(currentPost)
}

// handleCategoryInput = e => {
// const category = e.target.value
// const currentPost = {
// 	key: Date.now(),
// 	title: titleText,
// 	category: 'new category',
// 	content: '',
// }
// this.setState({
// 	currentPost,
// })
// console.log(currentPost)
// }

handleTextArea = e => {
//     const title = e.target.value
// 	const content = e.target.value
// 		const currentContent = {
// 			key: Date.now(),
// 			title: title,
// 			category: 'new category',
// 			content: content,
// 		}
// 		this.setState({
// 			currentContent,
// 		})
// 		console.log(currentContent)
// }

handleSubmit = e => {
	e.preventDefault()
	const title = e.target.value
	const category = e.target.value
	const content = e.target.value
	const currentContent = {
		key: Date.now(),
		title: title,
		category: category,
		content: content,
	}
	this.setState({
		currentContent,
	})
	console.log(currentContent)
	console.log(this.state)
}

handleSubmit = e => {
	e.preventDefault()
	const { name } = e.target
	const { title, category, content, id } = this.state

	const currentContent = {
		key: Date.now(),
		title: title,
		category: category,
		content: content,
		id: id,
	}
	this.setState({
		currentContent,
	})
	console.log(currentContent)
}

handleSubmit = e => {
	e.preventDefault()
	const { name, category, content, id } = e.target

	const currentContent = {
		key: Date.now(),
		title: name,
		category: category,
		content: content,
		id: id,
	}
	this.setState({
		currentContent,
	})
	console.log(currentContent)
}

	handleBlur = e => {
		const { name } = e.target

		this.setState({
			name: name,
		})
		console.log(name)
    }
    
    	handleChange = e => {
				const { name, value, type, id } = e.target
				this.setState({ [name]: value })
			}