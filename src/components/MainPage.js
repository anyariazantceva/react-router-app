import React, {Component} from 'react';
import posts from './posts';
import PostItem from "./PostItem";
import './main-page.css';


export default class MainPage extends Component {
    state = {
        posts: posts
    };

    render () {
        const { posts } = this.state;
        const postsList = posts.map((post) => {
            return <PostItem key={post.id} title={post.title} category={post.category}/>
        });
        return (
            <div className='container'>
                <div className="main__title">Posts List</div>
                <button className="add-post__btn">Add Post</button>
                <div className="posts__list">
                    {postsList}
                </div>
            </div>
        )
    }

};
