import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {
    return (
        <div className={classes.friends}>
            <Friend name={'Stas'}/>
            <Friend name={'Denis'}/>
            <Friend name={'Lera'}/>
            <Friend name={'Igor'}/>
            <Friend name={'Sasha'}/>
            <Friend name={'Timofey'}/>
        </div>
    );
};

export default Friends;