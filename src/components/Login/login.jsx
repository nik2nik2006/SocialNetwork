import React from "react";
import {Field, reduxForm} from 'redux-form';
import {FormControl, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validadors";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={FormControl} validate={[required]} child="input"/>
                {/*<Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>*/}
            </div>
            <div>
                <Field placeholder={"Login"} name={"login"} component={FormControl} validate={[required]} child="input"/>
                {/*<Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>*/}
            </div>
            <div>
                <Field component={FormControl} name={"rememberMe"} type={"checkbox"} child="input"/> remember me
                {/*<Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me*/}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
    // fields: ['firstName', 'lastName', 'email'] // all the fields in your form
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login