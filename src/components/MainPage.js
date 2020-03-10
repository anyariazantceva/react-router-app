import React from 'react';
import PostItem from './PostItem';
import PostButtons from './PostButtons';
import './main-page.css';

const MainPage = ({ posts, userId }) => {
  const postsList = posts.map(post => {
    if (userId === post.userId) {
      return (
        <div>
          <PostItem key={post.id} title={post.title} category={post.category} />
          <div>button</div>
        </div>
      );
    }
    return (
      <PostItem key={post.id} title={post.title} category={post.category} />
    );
  });
  //   console.log(posts);
  //   const  renderPosts = () => {
  //     const filteredPosts = posts.filter(post => userId === post.userId);
  //     console.log(filteredPosts);
  //     filteredPosts.map(post => {
  //       console.log(post);
  //       return (
  //         <div>
  //           <PostItem key={post.id} title={post.title} category={post.category} />
  //           <PostButtons />
  //         </div>
  //       );
  //     });
  //   };

  return (
    <div className="container">
      <div className="main__title">Posts List</div>
      <button className="btn">Add Post</button>
      <div className="posts__list">{postsList}</div>
    </div>
  );
};

export default MainPage;
