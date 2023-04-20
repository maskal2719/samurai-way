import React from "react";
import Header from "./Header";
import {authThunkCreator, InitialStateType} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerPropsType = {
    data: InitialStateType
    isAuth: boolean
    login: string | null
    authThunkCreator: () => void
}
export type MapStateToPropsType = {
    data: InitialStateType
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.authThunkCreator()
    }

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

export default connect(mapStateToProps, {authThunkCreator})(HeaderContainer)