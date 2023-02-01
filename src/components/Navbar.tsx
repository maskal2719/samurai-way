import React from 'react';
import classes from "./Navbar.module.css";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className='item'><a>Messages</a></div>
            <div className='item'><a>News</a></div>
            <div className='item'><a>Music</a></div>
            <div className='item'><a>Settings</a></div>
        </nav>
    );
};

export default Navbar;