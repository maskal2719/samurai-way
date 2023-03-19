import React from 'react';
import Friends from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <Friends friendsData={store.getState().profile.friendsData}/>
            <MyPostsContainer store={store}/>
        </div>
    );
};

export default Profile;