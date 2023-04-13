import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}
type MapDispatchPropsType = {}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profile.profile
})

// @ts-ignore
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)