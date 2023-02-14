import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    message: string
    id: number
}

export type DialogsPropsType = {
    dialogsData : DialogDataType[]
    messagesData: MessageDataType[]
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsData.length ? props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>) : 'Диалогов нет'

    let messagesElements = props.messagesData.length ? props.messagesData.map(el => <Message message={el.message} id={el.id}/>) : 'Сообщений нет'

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