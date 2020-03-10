import React from 'react';
import PostItem from "./PostItem";
import './main-page.css';


const MainPage = ({posts}) => {
        const postsList = posts.map((post) => {
            return <PostItem key={post.id} title={post.title} category={post.category}/>
        });
         
     
        
        return (
            <div className='container'>
                <div className="main__title">Posts List</div>
                <button className="btn" >Add Post</button>
                <div className="posts__list">
                    {postsList}
                </div>
            </div>
        )

};

export default MainPage
