import React from "react";
import './post-item.css';

const PostItem = ({id, title, category}) => {
    // const   removePost=(e) => {
    //     let array = [...props.post]; // make a separate copy of the array
    //     console.log(array)
    //     let index = array.indexOf(e.target.value)
    //     if (index !== -1) {
    //       array.splice(index, 1);
    //       this.setState({posts: array});
    //     }}
    return (
        <div className="post">
            <div className="post__left">
                <a className="post__title post__link" href='/'>{title}</a>
                <div className="post__category">{category}</div>
            </div>
            <div className="post__right">
                <button className="post__delete btn">Delete</button>
                <button className="post__edit btn">Edit</button>
            </div>
        </div>
    )
};

export default PostItem
