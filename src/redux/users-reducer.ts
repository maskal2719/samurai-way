export type UserPhotoType = {
    small: string
    large: string
}
export type UsersDataType = {
    name: string,
    id: number,
    uniqueUrlName : string,
    photos : UserPhotoType
    status: string,
    followed: boolean
}
export type InitialStateType = {
    users: Array<UsersDataType>
}
export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState: InitialStateType = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Den',
        //     status: 'I`m fine',
        //     avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png',
        //     location: {
        //         city: 'Gomel',
        //         country: 'Belarus'
        //     },
        //     followed: true
        // },
        // {
        //     id: 2,
        //     fullName: 'Lexa',
        //     status: 'I`m fine',
        //     avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png',
        //     location: {
        //         city: 'Mozir',
        //         country: 'Belarus'
        //     },
        //     followed: false
        // },
        // {
        //     id: 3,
        //     fullName: 'Dimon',
        //     status: 'I`m fine',
        //     avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png',
        //     location: {
        //         city: 'Parichi',
        //         country: 'Belarus'
        //     },
        //     followed: true
        // }
    ] as Array<UsersDataType>
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
        default : {
            return state
        }
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<UsersDataType>) => ({type: SET_USERS, users}) as const

export default usersReducer