import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    body: string
    like : number
}

const Post : React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g0jJR5cHlHWtnGR4zPu83mjqkfXiluRUFA&usqp=CAU"
                alt="avatar "/>
            {props.body}
            <div>
                <span>{props.like}</span>
                <button>delete</button>
            </div>
        </div>
    );
};

export default Post;