import React from 'react';
import './Header.module.css';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header_logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
                 alt=""/>
            <h1 className={classes.header_h1}>Social Network</h1>
            <button className={classes.login_btn}>Login</button>
        </header>
    );
};

export default Header;