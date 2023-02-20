import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfileType
    addNewPost: (newPost: string)=> void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Friends friendsData={props.state.friendsData}/>
            <MyPosts postsData={props.state.postsData} addNewPost={props.addNewPost}/>
        </div>
    );
};

export default Profile;