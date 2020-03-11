import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      content: '',
      key: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value});
    // console.log(e.target.value);
    // const value = e.target.value
    // const name = e.target.name
    // this.setState({title : e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();

    const newpost = {
      title: this.state.title,
      category: this.state.category,
      content: this.state.content
    };
    this.props.addPost(newpost);
    //  this.props.history.push('/');
   
  };

  render() {
    // console.log(this.props.addPost);

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

         <Link to='/'><button className="btn--save">Save</button></Link> 

          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
