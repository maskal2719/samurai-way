import React from 'react';

const Profile = () => {
    return (
        <div className='main-content'>
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
            <div className='post'>
                My posts
                <div className='new-post'>
                    <input type="text"/>
                </div>
                <div className='post'>
                    Post1
                </div>
            </div>
        </div>
    );
};

export default Profile;