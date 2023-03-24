export type PostDataType = {
    id: number
    message: string
    like: number
}
export type FriendsDataType = {
    status: string
    name: string
}

export type InitialStateType = {
    friendsData: Array<FriendsDataType>
    postsData: Array<PostDataType>
    newPostText: string
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState: InitialStateType = {
    friendsData: [
        {status: 'Offline', name: 'Stas'},
        {status: 'Offline', name: 'Denis'},
        {status: 'Offline', name: 'Valera'},
        {status: 'Offline', name: 'Igor'},
        {status: 'Offline', name: 'Alex'},
        {status: 'Offline', name: 'Miha'},
    ] as Array<FriendsDataType>,
    postsData: [
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quos totam vero voluptatum? Aliquid amet enim eos fugit iste maiores nemo neque nihil, nisi officia provident sapiente sequi, sunt suscipit vero voluptate voluptatum. At explicabo, illum ipsa necessitatibus odit temporibus!',
            like: 24
        },
        {id: 2, message: 'How are You?', like: 52},
        {id: 3, message: 'I`m fine', like: 12},
        {id: 4, message: 'And you?', like: 151},
    ] as Array<PostDataType>,
    newPostText: 'gav-gav'
}
const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                like: Math.floor(Math.random() * 100)
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

export default profileReducer