import React from 'react';
import '../css/post-item.css';
import {Link} from "react-router-dom";

const PostItem = ({id, title, category}) => {
    return (
            <div className='post__left'>
                <Link to={`/post/${id}`} className="post__title post__link">{title}</Link>
                <div className="post__category">{category}</div>
            </div>
    )
};

export default PostItem;
