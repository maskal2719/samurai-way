import {ActionsTypes, DialogsType, StateType} from "./state";
import profileReducer from "./profile-reducer";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const dialogsReducer = (state: DialogsType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}
export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE}) as const
export const updateNewMessageTextActionCreator = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage}) as const

export default dialogsReducer