import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar : React.FC = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active_link}`}>
                <NavLink to='/profile' activeClassName={classes.active_link}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active_link}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active_link}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active_link}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active_link}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/setting' activeClassName={classes.active_link}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;