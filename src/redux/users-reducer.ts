import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UserPhotoType = {
    small: string
    large: string
}
export type UsersDataType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: UserPhotoType
    status: string,
    followed: boolean
}
export type InitialStateType = {
    users: Array<UsersDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type ActionsType =
    ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

let initialState: InitialStateType = {
    users: [] as Array<UsersDataType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case SET_USERS : {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            }
        }
        default : {
            return state
        }
    }
}

export const acceptFollow = (userId: number) => ({type: FOLLOW, userId}) as const
export const acceptUnfollow = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: Array<UsersDataType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
}) as const
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}) as const
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
}) as const

//Thunks

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage))
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.setFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptFollow(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}
export const unfollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.setUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptUnfollow(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}


export default usersReducer