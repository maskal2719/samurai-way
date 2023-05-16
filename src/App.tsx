import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {authThunkCreator} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


type AppPropsType = {
    initialized: boolean
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

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
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
