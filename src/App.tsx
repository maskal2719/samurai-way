import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs, {DialogDataType, MessageDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {FriendsDataType} from "./components/Profile/Friends/Friends";
import {PostDataType} from "./components/Profile/MyPosts/MyPosts";

type AppPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessageDataType[]
    friendsData: FriendsDataType[]
    postsData: PostDataType[]
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <div className='main-section'>
                    <Navbar/>
                    <div className='main'>
                        <Route path='/dialogs'
                               render={() => <Dialogs dialogsData={props.dialogsData}
                                                      messagesData={props.messagesData}
                               />}
                        />
                        <Route path='/profile'
                               render={() => <Profile friendsData={props.friendsData}
                                                      postsData={props.postsData}
                               />}
                        />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/setting' component={Settings}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
