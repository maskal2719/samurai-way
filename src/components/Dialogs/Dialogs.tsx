import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType} from "../../redux/state";

export type DialogDataType = {
    id: number
    name: string
    avatar: string
}

export type MessageDataType = {
    message: string
    id: number
}

export type DialogsPropsType = {
    state: DialogsType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogsData.length ? props.state.dialogsData.map(el => <DialogItem name={el.name}
                                                                                                         id={el.id}
                                                                                                         avatar={el.avatar}
    />) : 'Диалогов нет'

    let messagesElements = props.state.messagesData.length ? props.state.messagesData.map(el => <Message
        message={el.message} id={el.id}/>) : 'Сообщений нет'

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