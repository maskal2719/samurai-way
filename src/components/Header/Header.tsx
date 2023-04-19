import React, {FC} from 'react';
import './Header.module.css';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {InitialStateType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

const Header: FC<HeaderPropsType> = ({ isAuth, login}) => {
    console.log(login)
    return (
        <header className={classes.header}>
            <img className={classes.header_logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
                 alt=""/>
            <h1 className={classes.header_h1}>Social Network</h1>
            {
                isAuth
                    ?
                    login
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