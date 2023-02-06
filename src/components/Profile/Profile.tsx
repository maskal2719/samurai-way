import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img className='fon'*/}
            {/*         src="https://www.rgo.ru/sites/default/files/node/59064/anna-politova-solnechnyy-ushishir-602387.jpg"*/}
            {/*         alt=""/>*/}
            {/*</div>*/}
            <div className={classes.profile_info}>
                <img src="https://avatars.githubusercontent.com/u/11731867?v=4" alt="avatar"/>
                <div>
                    <h3 className={classes.name}>Marco Reus</h3>
                    <div className={classes.dop_info}>
                        <div>27.07.1996</div>
                        <div>Gomel State University</div>
                    </div>

                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;