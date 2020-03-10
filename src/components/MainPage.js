import React from 'react';
import PostItem from './PostItem';
import PostButtons from './PostButtons';
import './main-page.css';

const MainPage = ({ posts, userId }) => {
  const postsList = posts.map(post => {
    if (userId === post.userId) {
      return (
        <div className="post">
          <PostItem key={post.id} title={post.title} category={post.category} />
          <PostButtons/>
        </div>
      );
    }
    return (
        <div className="post">
            <PostItem className='post__left' key={post.id} title={post.title} category={post.category} />
            <PostButtons className='post__right'/>
        </div>
    );
  });

  return (
    <div className="container">
      <div className="main__title">Posts List</div>
      <button className="btn">Add Post</button>
      <div className="posts__list">{postsList}</div>
    </div>
  );
};

export default MainPage;
