import React from 'react';
import {addPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type PostDataType = {
    id: number
    message: string
    like: number
}

type MapStatePropsType = {
    postsData: PostDataType[]
    newPostText: string
}
type MapDispatchPropsType = {
    updateNewPostText: (newPost: string) => void
    addPost: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (newPost: string) => {
            dispatch(updateNewPostTextActionCreator(newPost))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;