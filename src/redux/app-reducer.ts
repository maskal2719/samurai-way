import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {authThunkCreator} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}
export type ActionsType = ReturnType<typeof initializedSuccess>


let initialState: InitialStateType = {
    initialized: false
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default : {
            return state
        }
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
        let promise =  dispatch(authThunkCreator())
        Promise.all([promise]).then(() =>{
            dispatch(initializedSuccess())
        })
    };
}

export default appReducer
