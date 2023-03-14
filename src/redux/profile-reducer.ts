import {ActionsTypes, ProfileType, StateType} from "./state";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const profileReducer = (state: ProfileType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                like: Math.floor(Math.random() * 100)
            }
            state.postsData = [newPost, ...state.postsData]
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default: return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const

export default profileReducer