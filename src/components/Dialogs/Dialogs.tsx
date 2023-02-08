import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}

const Dialog : React.FC<DialogPropsType> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
    id: number
}
const Message : React.FC<MessagePropsType> = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

type DialogDataType = {
    id: number
    name: string
}

type MessageDataType = {
    message: string
    id: number
}

const Dialogs: React.FC = () => {

    let dialogsData: Array<DialogDataType> = [
        {id: 1, name: 'Stas'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Alex'},
    ]

    let messagesData: Array<MessageDataType> = [
        {id: 1, message: 'Hello my friend'},
        {id: 2, message: 'How are You?'},
        {id: 3, message: 'I`m fine'},
        {id: 4, message: 'And you?'},
    ]

    let dialogsElements = dialogsData.length ? dialogsData.map(el => <Dialog name={el.name} id={el.id}/>) : 'Диалогов нет'

    let messagesElements = messagesData.length ? messagesData.map(el => <Message message={el.message} id={el.id}/>) : 'Сообщений нет'

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;