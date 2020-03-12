import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import '../css/main-page.css';

const MainPage = ({ posts, userId, deletePost, editPost, isSignedIn }) => {
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
            <Link to={`/editpost/${id}`}>
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
  const displayButton = isSignedIn ? (
    <Link to="/addpost">
      <button className="btn">Add Post</button>
    </Link>
  ) : null;

  return (
    <div className="container">
      <div className="main__title">Posts List</div>
      {displayButton}
      <div className="posts__list">{postsList}</div>
    </div>
  );
};

export default MainPage;
