import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./store";

let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)