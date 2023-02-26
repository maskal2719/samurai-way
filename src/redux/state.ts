import {DialogDataType, MessageDataType} from "../components/Dialogs/Dialogs";
import {FriendsDataType} from "../components/Profile/Friends/Friends";
import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import {renderEntireTree} from "../render";

export type ProfileType = {
    friendsData: Array<FriendsDataType>
    postsData: Array<PostDataType>
}

export type DialogsType = {
    dialogsData: Array<DialogDataType>
    messagesData: Array<MessageDataType>
}

export type stateType = {
    profile: ProfileType
    dialogs: DialogsType
}

let state: stateType = {
    profile: {
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
        ]
    },
    dialogs: {
        dialogsData: [
            {id: 1, name: 'Sancho', avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png'},
            {id: 2, name: 'Bellingham', avatar: 'https://img.uefa.com/imgml/TP/players/1/2023/324x324/250128377.jpg'},
            {id: 3, name: 'Mukoko', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5LpkeMwxJglHBB6A-6CWGzBkdUBghAwCgbKoiszB4dkdR3Ixd9m0Vt_a68pprGEd-I8&usqp=CAU'},
            {id: 4, name: 'Hummels', avatar: 'data:image/jpeg;base64,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'},
            {id: 5, name: 'Haler', avatar: 'https://i.guim.co.uk/img/media/c2c9873e5392548d689c093b075b12869a3574a0/886_345_3512_2107/master/3512.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=389ccb5cb8d64346686652b17013a324'},
        ],
        messagesData: [
            {id: 1, message: 'Hello my friend'},
            {id: 2, message: 'How are You?'},
            {id: 3, message: 'I`m fine'},
            {id: 4, message: 'And you?'},
        ],
    },
}

export const addNewPost = (postMessage: string) => {
    let newPost = {
        id: state.profile.postsData.length + 1,
        message: postMessage,
        like: 61
    }
    state.profile.postsData.push(newPost)
    renderEntireTree(state)
}

export const addNewMessage = (message: string) => {
    let newMessage = {
        id: state.profile.postsData.length + 1,
        message: message,
    }
    state.dialogs.messagesData.push(newMessage)
    renderEntireTree(state)
}

export default state

