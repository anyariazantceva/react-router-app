import React from 'react';
import {Link} from 'react-router-dom';
import './post-details.css';

const PostDetails = (props) => {
   const posts = props.posts;
   const id = +props.match.params.id;
   const filteredPostArray = posts.filter((item) => {
       return item.id === id;
   });
   const filteredPost = filteredPostArray[0];

    return (
      <div className="post-main-div container">
        <div className="post-top-div content">
          <Link to='/'>Back to Posts</Link>
          {/*<button className="postButton">Delete Post</button>*/}
          {/*<button className="postButton1">Edit Post</button>*/}
        </div>
        <div className="post-text-div header">
          <h4>Title: {filteredPost.title}</h4>
          <h4>Category: {filteredPost.category}</h4>
        </div>
        <div className="post-content-div description">
          <p>{filteredPost.content}</p>
        </div>
      </div>
    );
};

export default PostDetails
