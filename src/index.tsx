import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addNewMessage, addNewPost} from './redux/state'

ReactDOM.render(
    <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}/>,
    document.getElementById('root')
);

