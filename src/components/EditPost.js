import React, { Component } from 'react';

export class EditPost extends Component {
  state = {
    id: null,
    title: '',
    category: '',
    content: '',
    userId: '',
    ...this.props.posts[this.props.match.params.id]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const modifiedPost = {
      id: this.state.id,
      title: this.state.title,
      category: this.state.category,
      content: this.state.content,
      userId: this.state.userId
    };

    // console.log(modifiedPost);
    const id = Number(this.props.match.params.id);

    this.props.editPost(id, modifiedPost);
    this.props.onDismiss();
  };

  render() {
    // console.log(this.props.match.params.id);
    // console.log(this.props.posts[this.props.match.params.id]);
    // console.log(this.state);
    return (
      <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
              type="text"
            />
          </div>
          <div className="category">
            <label htmlFor="Category">Category:</label>
            <input
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              placeholder="Category"
              type="text"
            />
          </div>
          <div className="writeNewField">
            <label htmlFor="writeNewField">write New Post:</label>
            <textarea
              name="content"
              id="textfield"
              value={this.state.content}
              onChange={this.handleChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          ><button className="btn--save">Save</button>
          <button on>Cancel</button>
        </form>
      </div>
    );
  }
}

export default EditPost;
