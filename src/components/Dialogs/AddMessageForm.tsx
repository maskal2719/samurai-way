import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
                <button>Send message</button>
            </form>
        </>

    );
};
export const AddMessageFormReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageFormReduxForm;