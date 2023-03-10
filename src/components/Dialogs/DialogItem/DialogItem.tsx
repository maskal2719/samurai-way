import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
    avatar: string
}

const DialogItem: React.FC<DialogPropsType> = ({name, id, avatar}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={classes.dialog}>
            <img src={avatar} alt="avatar_dialog"/>
            <NavLink activeClassName={classes.active} to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;