import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfileType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = ({state, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <Friends friendsData={state.friendsData}/>
            <MyPosts postsData={state.postsData} newPostText={state.newPostText} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;