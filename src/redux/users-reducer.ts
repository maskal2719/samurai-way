import users from "../components/Users/Users";

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
}
export type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>

let initialState: InitialStateType = {
    users: [] as Array<UsersDataType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
            return  {
                ...state, totalUsersCount : action.totalUsersCount
            }
        }
        default : {
            return state
        }
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<UsersDataType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount}) as const

export default usersReducer