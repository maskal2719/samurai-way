import React, {LegacyRef} from 'react';
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
    addNewMessage: (newMessage: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogsData.length ? props.state.dialogsData.map(el => <DialogItem name={el.name}
                                                                                                         id={el.id}
                                                                                                         avatar={el.avatar}
    />) : 'Диалогов нет'

    let messagesElements = props.state.messagesData.length ? props.state.messagesData.map(el => <Message
        message={el.message} id={el.id}/>) : 'Сообщений нет'


    const newMessageElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const onAddNewMessageHandler = () => {
        const newMessage = newMessageElement.current?.value;
        newMessage && props.addNewMessage(newMessage)
        console.log(newMessage)
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

            <textarea ref={newMessageElement}></textarea>
            <button onClick={onAddNewMessageHandler}>Send message</button>
        </div>
    );
};

export default Dialogs;