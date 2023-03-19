import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    state: StateType
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = ({state, dispatch, store}) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <div className='main-section'>
                    <Navbar/>
                    <div className='main'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer store={store}
                               />}
                        />
                        <Route path='/profile'
                               render={() => <Profile store={store}
                               />}
                        />
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/setting' render={() => <Settings/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
