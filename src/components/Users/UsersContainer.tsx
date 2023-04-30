import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    acceptFollow, getUsersThunkCreator,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    acceptUnfollow,
    UsersDataType, followThunkCreator, unfollowThunkCreator
} from "../../redux/users-reducer";
import Users from './Users';

import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    users: Array<UsersDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    acceptFollow: (userId: number) => void
    acceptUnfollow: (userId: number) => void
    setUsers: (users: Array<UsersDataType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void

}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (el: number) => {
        this.props.getUsersThunkCreator(el, this.props.pageSize)
    }

    render() {
        return <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   acceptFollow={this.props.acceptFollow}
                   acceptUnfollow={this.props.acceptUnfollow}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        acceptFollow, acceptUnfollow, setUsers,
        setCurrentPage, setTotalUsersCount, setIsFetching,
        toggleFollowingInProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
    }),
    withAuthRedirect
)
(UsersContainer)