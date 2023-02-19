import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
    avatar: string
}

const DialogItem : React.FC<DialogPropsType> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <img src={props.avatar} alt="avatar_dialog"/>
            <NavLink activeClassName={classes.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;