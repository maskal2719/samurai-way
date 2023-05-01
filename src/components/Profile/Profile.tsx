import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileInfo/ProfileContainer";

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;