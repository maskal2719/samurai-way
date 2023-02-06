import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {
    return (
        <div className={classes.friends}>
            <Friend name={'Stas'} status={'Offline'}/>
            <Friend name={'Denis'} status={'Online'}/>
            <Friend name={'Lera'} status={'Offline'}/>
            <Friend name={'Igor'} status={'Offline'}/>
            <Friend name={'Sasha'} status={'Offline'}/>
            <Friend name={'Timofey'} status={'Offline'}/>
        </div>
    );
};

export default Friends;