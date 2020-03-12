import React, { Component } from 'react';

export class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.posts.length + 1,
      title: '',
      category: '',
      content: '',
      key: ''
    };
    console.log(props)
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: this.state.id,
      title: this.state.title,
      category: this.state.category,
      content: this.state.content,
      userId: this.props.userId
    };

    this.props.addPost(newPost);
    this.props.onDismiss();
  };

  render() {
    console.log(this.props.posts);
    return (
      <div className="ui container ui form add-form">
        <form onSubmit={this.handleSubmit}>
          <div className="title field">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
              type="text"
              required
            />
          </div>
          <div className="category field">
            <label htmlFor="Category">Category:</label>
            <input
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              placeholder="Category"
              type="text"
              required
            />
          </div>
          <div className="writeNewField field">
            <label htmlFor="writeNewField">Write New Post:</label>
            <textarea
              name="content"
              id="textfield"
              value={this.state.content}
              onChange={this.handleChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="btn--save">Save</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
