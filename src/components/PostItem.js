import React from "react";
import './post-item.css';

const PostItem = ({title, category}) => {
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
