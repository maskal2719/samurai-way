import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsType, StoreType} from "../../redux/store";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

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
   store: StoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {

    let state = store.getState().dialogs;

    const addNewMessageHandler = () => {
        store.dispatch(addNewMessageActionCreator())
    }

    const onMessageChange = (newMessage: string) => {
        newMessage && store.dispatch(updateNewMessageTextActionCreator(newMessage))
    }

    return (
        <Dialogs updateNewMessageTextActionCreator={onMessageChange} addNewMessage={addNewMessageHandler} state={state}/>
    );
};

export default DialogsContainer;