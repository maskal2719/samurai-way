import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPage,
    setTotalUsersCount,
    setUsersAC,
    unfollowAC,
    UsersDataType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import Users from "./Users";


type MapStatePropsType = {
    users: Array<UsersDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersDataType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

let mapDispatchProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersDataType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount : (totalUsersCount: number) => {
            dispatch(setTotalUsersCount(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Users);