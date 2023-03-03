import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfileType
    addNewPost: (newPost: string)=> void
}

const Profile: React.FC<ProfilePropsType> = ({state, addNewPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <Friends friendsData={state.friendsData}/>
            <MyPosts postsData={state.postsData} addNewPost={addNewPost}/>
        </div>
    );
};

export default Profile;