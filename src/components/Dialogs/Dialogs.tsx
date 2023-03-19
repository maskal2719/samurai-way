import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsType, StateType, StoreType} from "../../redux/store";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

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
    updateNewMessageTextActionCreator: (text: string) => void
    addNewMessage: () => void
    state: DialogsType
}

const Dialogs: React.FC<DialogsPropsType> = ({updateNewMessageTextActionCreator, addNewMessage, state}) => {


    let dialogsElements = state.dialogsData.length ? state.dialogsData.map(el => <DialogItem key={el.id} name={el.name}
                                                                                             id={el.id}
                                                                                             avatar={el.avatar}
    />) : 'Диалогов нет'

    let messagesElements = state.messagesData.length ? state.messagesData.map(el => <Message key={el.id}
                                                                                             message={el.message}
                                                                                             id={el.id}/>) : 'Сообщений нет'


    const newMessageElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addNewMessageHandler = () => {
        addNewMessage()
    }

    const onMessageChange = () => {
        const newMessage = newMessageElement.current?.value;
        newMessage && updateNewMessageTextActionCreator(newMessage)
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

            <textarea value={state.newMessageText} ref={newMessageElement} onChange={onMessageChange}></textarea>
            <button onClick={addNewMessageHandler}>Send message</button>
        </div>
    );
};

export default Dialogs;