import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className='post'>
            <h3>Posts</h3>
            <div className={classes.new_post}>
                <input className={classes.input} placeholder='Enter new post)' type="text"/>
                <button className={classes.add_button}>Add new post</button>
            </div>
            <Post body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa cum distinctio dolorum eius eveniet explicabo id illo modi molestias nesciunt nisi odio officia porro, praesentium quae recusandae, tempore voluptas.'} like={100}/>
            <Post body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa cum distinctio dolorum eius eveniet explicabo id illo modi molestias nesciunt nisi odio officia porro, praesentium quae recusandae, tempore voluptas.'} like={45}/>
        </div>
    );
};

export default MyPosts;