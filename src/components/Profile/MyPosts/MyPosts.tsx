import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    type PostDataType = {
        id: number
        message: string
        like: number
    }

    let postsData: Array<PostDataType> = [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quos totam vero voluptatum? Aliquid amet enim eos fugit iste maiores nemo neque nihil, nisi officia provident sapiente sequi, sunt suscipit vero voluptate voluptatum. At explicabo, illum ipsa necessitatibus odit temporibus!', like: 24},
        {id: 2, message: 'How are You?', like: 52},
        {id: 3, message: 'I`m fine', like: 12},
        {id: 4, message: 'And you?', like: 152},
    ]

    let postsElements = postsData.length ? postsData.map(el => <Post message={el.message} id={el.id} like={el.like}/>) : 'Постов нет';

    return (
        <div className='post'>
            <h3>Posts</h3>
            <div className={classes.new_post}>
                <textarea className={classes.input}> </textarea>
                <button className={classes.add_button}>Publish</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;