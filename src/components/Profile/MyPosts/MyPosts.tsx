import React, {LegacyRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export type PostDataType = {
    id: number
    message: string
    like: number
}

type MyPostsPropsType = {
    postsData: PostDataType[]
    addNewPost: (newPost: string) => void
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.postsData.length ? props.postsData.map(el => <Post message={el.message} id={el.id}
                                                                                 like={el.like}/>) : 'Постов нет';

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPostHandler = () => {
        const text = newPostElement.current?.value;
        text && props.addNewPost(text)
        console.log(text)

    }

    return (
        <div className='post'>
            <h3>Posts</h3>
            <div className={classes.new_post}>
                <textarea ref={newPostElement} className={classes.input}> </textarea>
                <button onClick={onAddPostHandler} className={classes.add_button}>Publish</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;