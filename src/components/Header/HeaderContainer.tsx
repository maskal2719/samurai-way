import React from "react";
import axios from "axios";
import Header from "./Header";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type HeaderContainerPropsType = {
    data: InitialStateType
    isAuth: boolean
    login: string | null
    setAuthUserData: (state: InitialStateType) => void
}
export type MapStateToPropsType = {
    data: InitialStateType
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        usersAPI.isAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }
                console.log(data)
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)