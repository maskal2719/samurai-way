import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    body: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g0jJR5cHlHWtnGR4zPu83mjqkfXiluRUFA&usqp=CAU"
                alt=""/>
            {props.body}
            <div>
                <span>Like</span>
                <button>delete</button>
            </div>
        </div>
    );
};

export default Post;