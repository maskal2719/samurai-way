import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

export type FriendsDataType = {
    status: string
    name: string
}

type FriendsPropsType = {
    friendsData: FriendsDataType[]
}

const Friends: React.FC<FriendsPropsType> = (props) => {

    let friendsElements = props.friendsData.length ? props.friendsData.map(el => <Friend name={el.name}
                                                                                         status={el.status}/>) : 'Друзей нет'

    return (
        <div>
            <h4>Friends</h4>
            <div className={classes.friends}>
                {friendsElements}
            </div>
        </div>
    );
};

export default Friends;