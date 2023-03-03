import React from 'react';
import classes from './../Dialogs.module.css';



export type MessagePropsType = {
    message: string
    id: number
}
const Message : React.FC<MessagePropsType> = ({message,id}) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}

export default Message;