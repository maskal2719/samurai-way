import React, {FC} from 'react';
import './Header.module.css';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {InitialStateType, logoutThunkCreator} from "../../redux/auth-reducer";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutThunkCreator: () => void
}

const Header: FC<HeaderPropsType> = ({ isAuth, login, logoutThunkCreator}) => {
    return (
        <header className={classes.header}>
            <img className={classes.header_logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
                 alt=""/>
            <h1 className={classes.header_h1}>Social Network</h1>
            {
                isAuth
                    ?
                    <div>
                        {login}
                        <button className={classes.login_btn} onClick={logoutThunkCreator}>Logout</button>
                    </div>
                    :
                    <button className={classes.login_btn}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </button>
            }

            {/*<div className={classes.loginBlock}>*/}

            {/*</div>*/}
        </header>
    );
};

export default Header;