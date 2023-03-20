import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

export type PostDataType = {
    id: number
    message: string
    like: number
}

type MyPostsPropsType = {
    // store: StoreType
}
const MyPostsContainer: React.FC<MyPostsPropsType> = () => {

    // // let state = store.getState()
    // const addPost = () => {
    //     store.dispatch(addPostActionCreator())
    // }
    //
    // const onPostChange = (text: string) => {
    //     text && store.dispatch(updateNewPostTextActionCreator(text))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onPostChange = (text: string) => {
                        text && store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                    postsData={state.profile.postsData}
                                    newPostText={state.profile.newPostText}/>
                }
            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;