import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer/>
                <div className='main-section'>
                    <Navbar/>
                    <div className='main'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer
                               />}
                        />
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer
                               />}
                        />
                        <Route path='/users'
                               render={() => <UsersContainer/>}
                        />
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/setting' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
