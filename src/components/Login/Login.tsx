import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = () => {
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm/>
        </div>
    );
};

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} required name={'login'}/>
            </div>
            <div>
                <Field type="text" placeholder={'pass'} component={'input'} required name={'password'}/>
            </div>
            <div>
                <Field type="checkbox" component={'input'} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;