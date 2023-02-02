import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className='fon'
                     src="https://www.rgo.ru/sites/default/files/node/59064/anna-politova-solnechnyy-ushishir-602387.jpg"
                     alt=""/>
            </div>
            <div className='profile-info'>
                <img src="https://avatars.githubusercontent.com/u/11731867?v=4" alt=""/>
                <div>
                    <h3>Marco Reus</h3>
                    <span>27.07.1996</span>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;