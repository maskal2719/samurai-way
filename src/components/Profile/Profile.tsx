import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfileType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Friends friendsData={props.state.friendsData}/>
            <MyPosts postsData={props.state.postsData}/>
        </div>
    );
};

export default Profile;