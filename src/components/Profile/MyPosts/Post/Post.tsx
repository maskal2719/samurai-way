import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    like : number
    id: number
}

const Post : React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g0jJR5cHlHWtnGR4zPu83mjqkfXiluRUFA&usqp=CAU"
                alt="avatar "/>
            {props.message}
            <div>
                <span>&#9829;{props.like}</span>
                <button>delete</button>
            </div>
        </div>
    );
};

export default Post;