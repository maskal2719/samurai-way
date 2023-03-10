import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsType} from "../../redux/state";

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
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({state, dispatch}) => {

    let dialogsElements = state.dialogsData.length ? state.dialogsData.map(el => <DialogItem key={el.id} name={el.name}
                                                                                             id={el.id}
                                                                                             avatar={el.avatar}
    />) : 'Диалогов нет'

    let messagesElements = state.messagesData.length ? state.messagesData.map(el => <Message key={el.id}
                                                                                             message={el.message}
                                                                                             id={el.id}/>) : 'Сообщений нет'


    const newMessageElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const onAddNewMessageHandler = () => {
        dispatch({type: 'ADD-NEW-MESSAGE'})
    }

    const onChangeHandler = () => {
        const newMessage = newMessageElement.current?.value;
        newMessage && dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage})
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

            <textarea value={state.newMessageText} ref={newMessageElement} onChange={onChangeHandler}></textarea>
            <button onClick={onAddNewMessageHandler}>Send message</button>
        </div>
    );
};

export default Dialogs;