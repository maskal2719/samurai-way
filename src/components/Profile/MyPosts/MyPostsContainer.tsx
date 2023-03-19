import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

export type PostDataType = {
    id: number
    message: string
    like: number
}

type MyPostsPropsType = {
    store: StoreType
}
const MyPostsContainer: React.FC<MyPostsPropsType> = ({ store}) => {

    let state = store.getState()
    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        text && store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profile.postsData} newPostText={state.profile.newPostText}/>
    );
};

export default MyPostsContainer;