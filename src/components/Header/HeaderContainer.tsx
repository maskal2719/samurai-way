import React from "react";
import Header from "./Header";
import {InitialStateType, logoutThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerPropsType = {
    data: InitialStateType
    isAuth: boolean
    login: string | null
    logoutThunkCreator: () => void
}
export type MapStateToPropsType = {
    data: InitialStateType
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer)
