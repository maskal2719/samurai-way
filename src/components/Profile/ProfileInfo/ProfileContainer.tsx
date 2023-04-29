import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    getProfileThunkCreator: (userId: number) => void
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchPropsType = {}
export type OwnProfilePropsType = MapStatePropsType & MapDispatchPropsType
export type PathParamsType = {
    userId: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? 28469 : this.props.match.params.userId
        this.props.getProfileThunkCreator(Number(userId))
    }

    render() {

        if (!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
})
    //11123

// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// @ts-ignore
export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent)