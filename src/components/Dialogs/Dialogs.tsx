import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

const Dialog = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs: React.FC = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <Dialog name={'Stas'} id={'1'}/>
                <Dialog name={'Denis'} id={'2'}/>
                <Dialog name={'Valera'} id={'3'}/>
                <Dialog name={'Igor'} id={'4'}/>
                <Dialog name={'Alex'} id={'5'}/>
            </div>

            <div className={classes.messages}>
                <Message message={'Hello my friend'}/>
                <Message message={'How are You?'}/>
                <Message message={'I`m fine'}/>
                <Message message={'And you?'}/>
            </div>
        </div>
    );
};

export default Dialogs;