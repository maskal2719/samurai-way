import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
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

}
type MapDispatchPropsType = {
    addPost: (newPostBody: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profile.postsData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;