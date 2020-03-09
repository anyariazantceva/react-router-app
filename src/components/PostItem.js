import React from "react";
import './post-item.css';

const PostItem = ({title, category}) => {
    return (
        <div className="post">
            <a className="post__title post__link" href='/'>{title}</a>
            <div className="post__category">{category}</div>
        </div>
    )
};

export default PostItem
