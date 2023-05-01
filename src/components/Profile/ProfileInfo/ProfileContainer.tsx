import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, getStatus, ProfileType, updateStatus} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    getProfileThunkCreator: (userId: number) => void
    profile: ProfileType
    isAuth: boolean
    getStatus: (userId: number) => void
    status: string
    updateStatus: (status: string) => void
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
        this.props.getStatus(Number(userId))
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
    status: state.profile.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator, getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)