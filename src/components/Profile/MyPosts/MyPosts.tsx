import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {DialogsPropsType} from "./MyPostsContainer";
import AddPostFormReduxForm, { FormDataType } from "./AddNewPostForm";

const MyPosts: React.FC<DialogsPropsType> = ({postsData, addPost}) => {
    let postsElements = postsData.length ? postsData.map(el => <Post key={el.id}
                                                                     message={el.message}
                                                                     id={el.id}
                                                                     like={el.like}/>) : 'Постов нет';

    const onSubmit = (formData: FormDataType) => {
        addPost(formData.newPostBody)
        console.log(formData)
    }

    return (
        <div className='post'>
            <h3>Posts</h3>
            <AddPostFormReduxForm onSubmit={onSubmit}/>
            {postsElements}
        </div>
    );
};

export default MyPosts;