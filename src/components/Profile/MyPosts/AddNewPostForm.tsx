import React from 'react';
import classes from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type FormDataType = {
    newPostBody: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={classes.new_post}>
                    <Field component={Textarea} name={'newPostBody'} placeholder={'Enter your post message'}
                           validate={[requiredField, maxLength10]}/>
                    <button>Publish</button>
                </div>
            </form>
        </>
    );
};

export const AddPostFormReduxForm = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm)

export default AddPostFormReduxForm;