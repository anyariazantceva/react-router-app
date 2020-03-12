import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
    return (
      <div className="ui container ui form add-form">
        <form className='page-form'>
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
              cols="10"
              rows="3"
            ></textarea>
          </div>
          <button onClick={this.handleSubmit} className="btn--save">Save</button>
          <Link to='/'><button>Cancel</button></Link>
        </form>

      </div>
    );
  }
}

export default AddPost;
