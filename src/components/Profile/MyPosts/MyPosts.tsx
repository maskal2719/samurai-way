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
            <Post body={'1243512461324'} like={100}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
            <Post body={'dgasgasd'} like={45}/>
        </div>
    );
};

export default MyPosts;