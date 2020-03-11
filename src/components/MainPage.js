import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import './main-page.css';

const MainPage = ({ posts, userId, deletePost, editPost }) => {
  const postsList = posts.map(post => {
    const id = post.id;
    if (userId === post.userId) {
      return (
        <div className="post">
          <PostItem key={id} title={post.title} category={post.category} />
          <div className="post__right">
            <button
              className="post__delete btn"
              value={id}
              onClick={() => deletePost(id)}
            >
              Delete
            </button>

            <Link to={`/editpost/${post.id - 1}`}>
              <button className="post__edit btn">Edit</button>
            </Link>
          </div>
          {/* <PostNumber post={post} id={id} /> */}
        </div>
      );
    }

    return (
      <div className="post">
        <PostItem
          className="post__left"
          key={post.id}
          title={post.title}
          category={post.category}
        />
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
