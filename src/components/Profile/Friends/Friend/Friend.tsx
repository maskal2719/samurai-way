import React from 'react';
import classes from "./Friend.module.css";

type FriendPropsType = {
    name: string
}
const Friend : React.FC<FriendPropsType> = (props) => {
    return (
        <div className={classes.friend}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g0jJR5cHlHWtnGR4zPu83mjqkfXiluRUFA&usqp=CAU"
                alt="avatar "/>
            <p>{props.name}</p>
        </div>
    );
};

export default Friend;