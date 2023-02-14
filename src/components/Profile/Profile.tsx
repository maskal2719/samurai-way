import React from 'react';
import MyPosts, {PostDataType} from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import Friends, {FriendsDataType} from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    friendsData: FriendsDataType[]
    postsData: PostDataType[]
}

const Profile : React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Friends friendsData={props.friendsData}/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};

export default Profile;