import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <img className='header-logo'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
                 alt=""/>
        </header>
    );
};

export default Header;