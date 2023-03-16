import {ActionsTypes, ProfileType, StateType} from "./store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState: ProfileType = {
    friendsData: [
        {status: 'Offline', name: 'Stas'},
        {status: 'Offline', name: 'Denis'},
        {status: 'Offline', name: 'Valera'},
        {status: 'Offline', name: 'Igor'},
        {status: 'Offline', name: 'Alex'},
        {status: 'Offline', name: 'Miha'},
    ],
    postsData: [
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quos totam vero voluptatum? Aliquid amet enim eos fugit iste maiores nemo neque nihil, nisi officia provident sapiente sequi, sunt suscipit vero voluptate voluptatum. At explicabo, illum ipsa necessitatibus odit temporibus!',
            like: 24
        },
        {id: 2, message: 'How are You?', like: 52},
        {id: 3, message: 'I`m fine', like: 12},
        {id: 4, message: 'And you?', like: 151},
    ],
    newPostText: 'gav-gav'
}
const profileReducer = (state: ProfileType = initialState, action: ActionsTypes) => {
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