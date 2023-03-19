import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer
})

export const store: StoreType = createStore(reducers)