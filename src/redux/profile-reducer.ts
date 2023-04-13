export type PostDataType = {
    id: number
    message: string
    like: number
}
export type FriendsDataType = {
    status: string
    name: string
}
export type ProfileType = {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: Photos
}
export type Contacts = {
    facebook: string
    website: any
    vk: string
    twitter: string
    instagram: string
    youtube: any
    github: string
    mainLink: any
}
export type Photos = {
    small: string
    large: string
}

export type InitialStateType = {
    friendsData: Array<FriendsDataType>
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileType | null
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
    newPostText: 'gav-gav',
    profile : null
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
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
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
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile: profile}) as const

export default profileReducer