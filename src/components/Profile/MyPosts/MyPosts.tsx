import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className='post'>
            My posts
            <div className='new-post'>
                <input type="text"/>
            </div>
            <Post body={'1243512461324'}/>
            <Post body={'dgasgasd'}/>
        </div>
    );
};

export default MyPosts;