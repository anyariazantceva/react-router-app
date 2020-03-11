import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import './main-page.css';

const MainPage = ({ posts, userId, deletePost, editPost }) => {
  const postsList = posts.map(post => {
    if (userId === post.userId) {
      return (
        <div className="post">
          <PostItem key={post.id} id={post.id} title={post.title} category={post.category} />
          <div className="post__right">
            <button
              className="post__delete btn"
              value={post.id}
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
            <button className="post__edit btn" onClick={() => editPost(post.id)}>
              Edit
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="post">
        <PostItem
          className="post__left"
          id={post.id}
          key={post.id}
          title={post.title}
          category={post.category}
        />
        <div className="post__right">
          <button className="post__delete btn" onClick={() => deletePost(post.id)}>
            Delete
          </button>
          <button className="post__edit btn">Edit</button>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="main__title">Posts List</div>
      <Link to="/addpost">
        <button className="btn">Add Post</button>
      </Link>
      <div className="posts__list">{postsList}</div>
    </div>
  );
};

export default MainPage;
