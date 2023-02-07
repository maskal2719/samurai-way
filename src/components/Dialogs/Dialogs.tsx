import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs: React.FC = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <div className={classes.item + ' ' + classes.active}>
                    Stas
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/1'> Stas</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/2'> Stas</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/3'> Stas</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/4'> Stas</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/5'> Stas</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>
                    sdfgsdfgsdfg
                </div>
                <div className={classes.message}>
                    sdfgsdfgsdfg
                </div>
                <div className={classes.message}>
                    sdfgsdfgsdfg
                </div>
                <div className={classes.message}>
                    sdfgsdfgsdfg
                </div>
            </div>
        </div>
    );
};

export default Dialogs;