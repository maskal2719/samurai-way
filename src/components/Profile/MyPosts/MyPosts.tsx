import React, {ChangeEvent, LegacyRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

export type PostDataType = {
    id: number
    message: string
    like: number
}

type MyPostsPropsType = {
    postsData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}
const MyPosts: React.FC<MyPostsPropsType> = ({postsData, newPostText, dispatch}) => {
    let postsElements = postsData.length ? postsData.map(el => <Post key={el.id}
                                                                     message={el.message}
                                                                     id={el.id}
                                                                     like={el.like}/>) : 'Постов нет';

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value;
        text && dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className='post'>
            <h3>Posts</h3>
            <div className={classes.new_post}>
                <textarea onChange={onPostChange} ref={newPostElement} className={classes.input} value={newPostText}/>
                <button onClick={addPost} className={classes.add_button}>Publish</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;