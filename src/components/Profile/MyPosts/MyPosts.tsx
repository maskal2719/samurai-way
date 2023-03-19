import React, {ChangeEvent, LegacyRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export type PostDataType = {
    id: number
    message: string
    like: number
}

type MyPostsPropsType = {
    postsData: PostDataType[]
    newPostText: string
    updateNewPostText : (text: string) => void
    addPost: () => void
}
const MyPosts: React.FC<MyPostsPropsType> = ({postsData, newPostText,updateNewPostText, addPost}) => {
    let postsElements = postsData.length ? postsData.map(el => <Post key={el.id}
                                                                     message={el.message}
                                                                     id={el.id}
                                                                     like={el.like}/>) : 'Постов нет';

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value;
        text && updateNewPostText(text)
    }

    return (
        <div className='post'>
            <h3>Posts</h3>
            <div className={classes.new_post}>
                <textarea onChange={onPostChange} ref={newPostElement} className={classes.input} value={newPostText}/>
                <button onClick={onAddPost} className={classes.add_button}>Publish</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;