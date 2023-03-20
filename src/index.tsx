import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";
import StoreContext, { Provider } from "./StoreContext";


const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

