import React, { Component } from "react";
import './postNumber.css'
export default class PostNumber extends Component {
  state = {
    post: {
      id: "01a",
      title: "My day in Integrify",
      category: "work",
      content: `Do to be agreeable conveying oh assurance. Wicket longer admire do barton vanity itself do in it. 
        Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
         Abode stuff noisy manor blush yet the far. Up colonel so between removed so do. 
         Years use place decay sex worth drift age. Men lasting out end article express fortune demands own charmed.
          About are are money ask how seven. Yet remarkably appearance get him his projection. 
          Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished 
          fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again.
           As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration.
            In mr it he mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of norland arrived.`,
      userId: "105600790952176440765"
    },
    newPost: {}
  };
  render() {
      const {post} = this.props;

    return (
      <div className="post-main-div">
        <div className="post-top-div">
          <h4>Back to Post</h4>
          <button  className="postButton">Delete Post</button>
          <button className="postButton1">Edit Post</button>
        </div>
        <div className="post-text-div">
          <h4>Title: {post.title}</h4>
          <h4>Category: {post.category}</h4>
        </div>
        <div className="post-content-div">
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}