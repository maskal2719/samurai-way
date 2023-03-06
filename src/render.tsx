import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost, stateType, updateNewMessageText, updateNewPostText} from "./redux/state";


export const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>,
        document.getElementById('root')
    );
}


