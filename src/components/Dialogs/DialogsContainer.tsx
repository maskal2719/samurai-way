import React from 'react';
import {
    addNewMessageActionCreator,
    InitialStateType,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    addNewMessage: (newMessageBody: string) => void
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
        addNewMessage: (newMessageBody: string) => {
            dispatch(addNewMessageActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)