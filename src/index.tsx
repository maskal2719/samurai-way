import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addNewMessage, addNewPost, stateType, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";


const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App  addNewPost={addNewPost} addNewMessage={addNewMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>,
        document.getElementById('root')
    );
}

renderEntireTree(state)

subscribe(renderEntireTree)

