import React from 'react';
import classes from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    newPostBody: string
}
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={classes.new_post}>
                    <Field component={'textarea'} name={'newPostBody'} placeholder={'Enter your message'}/>
                    <button>Publish</button>
                </div>
            </form>
        </>
    );
};

export const AddPostFormReduxForm = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm)

export default AddPostFormReduxForm;