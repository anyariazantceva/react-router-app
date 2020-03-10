import React from 'react';
import PostItem from "./PostItem";
import './main-page.css';


const MainPage = ({posts, userId}) => {

        const renderPosts = () => {
            posts.map((post) => {
                if(userId === post.userId) {
                    return <PostItem key={post.id} title={post.title} category={post.category}/>
                }
            })
        }
        return (
            <div className='container'>
                <div className="main__title">Posts List</div>
                <button className="btn">Add Post</button>
                <div className="posts__list">
                    {renderPosts()}
                </div>
            </div>
        )

};

export default MainPage
