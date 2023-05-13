import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

export type FormDataType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field component={Textarea} validate={[requiredField, maxLength50]} name={'newMessageBody'}
                       placeholder={'Enter your message'}/>
                <button>Send message</button>
            </form>
        </>

    );
};
export const AddMessageFormReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageFormReduxForm;