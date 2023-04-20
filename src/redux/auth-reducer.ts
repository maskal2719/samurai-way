import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type ActionsType = ReturnType<typeof setAuthUserData>


let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const SET_USER_DATA = 'SET_USERS_DATA'

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default : {
            return state
        }
    }
}

export const setAuthUserData = (data: InitialStateType) => ({
    type: SET_USER_DATA,
    data: data
}) as const

export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.isAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data))
                }
            })
    }
}


export default authReducer