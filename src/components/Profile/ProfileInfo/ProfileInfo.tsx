import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.profile_info}>
            <img src="https://avatars.githubusercontent.com/u/11731867?v=4" alt="avatar"/>
            <div>
                <h3 className={classes.name}>Marco Reus</h3>
                <div className={classes.dop_info}>
                    <div>27.07.1996</div>
                    <div>Gomel State University</div>
                    <p className={classes.status}>Status: Hello!</p>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;