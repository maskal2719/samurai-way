import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import Friends from "./Friends/Friends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img className='fon'*/}
            {/*         src="https://www.rgo.ru/sites/default/files/node/59064/anna-politova-solnechnyy-ushishir-602387.jpg"*/}
            {/*         alt=""/>*/}
            {/*</div>*/}
            <ProfileInfo/>
            <Friends/>
            <MyPosts/>
        </div>
    );
};

export default Profile;