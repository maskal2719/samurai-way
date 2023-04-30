import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

type DialogDataType = {
    id: number
    name: string
    avatar: string
}

export type MessageDataType = {
    message: string
    id: number
}


const Dialogs: React.FC<DialogsPropsType> = ({updateNewMessageText, addNewMessage, dialogsPage, isAuth}) => {


    let dialogsElements = dialogsPage.dialogsData.length ? dialogsPage.dialogsData.map(el => <DialogItem key={el.id}
                                                                                                         name={el.name}
                                                                                                         id={el.id}
                                                                                                         avatar={el.avatar}
    />) : 'Диалогов нет'

    let messagesElements = dialogsPage.messagesData.length ? dialogsPage.messagesData.map(el => <Message key={el.id}
                                                                                                         message={el.message}
                                                                                                         id={el.id}/>) : 'Сообщений нет'


    const newMessageElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addNewMessageHandler = () => {
        addNewMessage()
    }

    const onMessageChange = () => {
        const newMessage = newMessageElement.current?.value;
        newMessage && updateNewMessageText(newMessage)
    }


    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs_item}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>

            <textarea value={dialogsPage.newMessageText} ref={newMessageElement} onChange={onMessageChange}></textarea>
            <button onClick={addNewMessageHandler}>Send message</button>
        </div>
    );
};

export default Dialogs;