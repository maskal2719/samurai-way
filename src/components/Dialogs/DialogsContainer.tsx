import React from 'react';
import {
    addNewMessageActionCreator,
    InitialStateType, updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessageText: (newMessage: string) => void
    addNewMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogs,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextActionCreator(newMessage))
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;