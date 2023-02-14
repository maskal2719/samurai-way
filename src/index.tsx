import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogDataType, MessageDataType} from "./components/Dialogs/Dialogs";
import {FriendsDataType} from "./components/Profile/Friends/Friends";
import {PostDataType} from "./components/Profile/MyPosts/MyPosts";

let dialogsData: Array<DialogDataType> = [
    {id: 1, name: 'Stas'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Alex'},
]

let messagesData: Array<MessageDataType> = [
    {id: 1, message: 'Hello my friend'},
    {id: 2, message: 'How are You?'},
    {id: 3, message: 'I`m fine'},
    {id: 4, message: 'And you?'},
]

let friendsData: Array<FriendsDataType> = [
    {status: 'Offline', name: 'Stas'},
    {status: 'Offline', name: 'Denis'},
    {status: 'Offline', name: 'Valera'},
    {status: 'Offline', name: 'Igor'},
    {status: 'Offline', name: 'Alex'},
]

let postsData: Array<PostDataType> = [
    {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quos totam vero voluptatum? Aliquid amet enim eos fugit iste maiores nemo neque nihil, nisi officia provident sapiente sequi, sunt suscipit vero voluptate voluptatum. At explicabo, illum ipsa necessitatibus odit temporibus!', like: 24},
    {id: 2, message: 'How are You?', like: 52},
    {id: 3, message: 'I`m fine', like: 12},
    {id: 4, message: 'And you?', like: 151},
]


ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} friendsData={friendsData} postsData={postsData}/>,
    document.getElementById('root')
);

