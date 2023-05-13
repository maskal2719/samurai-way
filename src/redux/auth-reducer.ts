import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

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
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        }
        default : {
            return state
        }
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {id, login, email, isAuth}
}) as const

export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.isAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null,null,null,false))
                }
            })
    }
}


export default authReducer