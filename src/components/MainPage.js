import React from "react";
import PostItem from "./PostItem";
import PostButtons from "./PostButtons";
import PostNumber from "./postNumber";
import "./main-page.css";

const MainPage = ({ posts, userId, deletePost}) => {
    const deletepost = (id)=>{
        deletePost(id)
        console.log(id)
    }
  const postsList = posts.map(post => {
    if (userId === post.userId) {
      return (
        <div className="post">
          <PostItem key={post.id} title={post.title} category={post.category} />
          <div className="post__right">
            <button className="post__delete btn" onClick={deletepost}>Delete</button>
            <button className="post__edit btn">Edit</button>
          </div>
          <PostNumber post={post} id={post.id}/>
        </div>
      );
    }
    // removePost=(e) => {
    //     let array = [...this.state.posts]; // make a separate copy of the array
    //     console.log(array)
    //     let index = array.indexOf(e.target.value)
    //     if (index !== -1) {
    //       array.splice(index, 1);
    //       this.setState({posts: array});
    //       console.log(array)
    //     }}
    
    return (
      <div className="post">
        <PostItem
          className="post__left"
          key={post.id}
          title={post.title}
          category={post.category}
        />
        <div className="post__right">
          <button className="post__delete btn" onClick={deletepost}>Delete</button>
          <button className="post__edit btn">Edit</button>
        </div>
        <PostNumber post={post} />
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
