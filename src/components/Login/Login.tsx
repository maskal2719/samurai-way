import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} validate={[requiredField]} component={Input} required name={'login'}/>
            </div>
            <div>
                <Field type="password" validate={[requiredField]} placeholder={'pass'} component={Input} required name={'password'}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {loginThunkCreator})(Login);