import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";



const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}
        />,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

