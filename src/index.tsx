import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store , { StateType} from "./redux/state";


const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addNewPost={store.addNewPost.bind(store)} addNewMessage={store.addNewMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)

