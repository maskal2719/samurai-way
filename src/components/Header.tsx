import React from 'react';
import './Header.module.css';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header_logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
                 alt=""/>
        </header>
    );
};

export default Header;