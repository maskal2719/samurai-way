import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {

    type FriendsDataType = {
        status: string
        name: string
    }

    let friendsData: Array<FriendsDataType> = [
        {status: 'Offline', name: 'Stas'},
        {status: 'Offline', name: 'Denis'},
        {status: 'Offline', name: 'Valera'},
        {status: 'Offline', name: 'Igor'},
        {status: 'Offline', name: 'Alex'},
    ]

    let friendsElements = friendsData.length ? friendsData.map(el => <Friend name={el.name} status={el.status}/>) : 'Друзей нет'

    return (
        <div className={classes.friends}>
            {friendsElements}
        </div>
    );
};

export default Friends;