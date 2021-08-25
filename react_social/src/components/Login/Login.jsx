import React from "react";
import { Form, Field } from "react-final-form";
import { Input } from "../../utils/FormsControl/FormsControl";
import { required } from "../../utils/validators/validators";
import s from "./Login.module.css";
import { login } from "../../redux/auth-reduser";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { FORM_ERROR } from "final-form";

const LoginForm = (props) => {
  // debugger;
  const onSubmit = (FormData) => {
    // console.log(FormData);
    // debugger;
    // return { [FORM_ERROR]: "Fail" };
    props.login(FormData.email, FormData.password, FormData.rememberMe);
    if (!props.isAuth) {
      return { [FORM_ERROR]: "Fail" };
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      // validate={validate}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit} className={s.loginForm}>
          <div>
            <Field
              name="email"
              type="text"
              placeholder="Email"
              component={Input}
              validate={required}
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              component={Input}
              validate={required}
            />
          </div>
          <div>
            <Field name="rememberMe" type="checkbox" component="input" />
            Remember me
          </div>
          {/* {submitError === undefined ? <div>{SubmitError}</div> : ""} */}
          {console.log(submitError)}

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    ></Form>
  );
};

const Login = (props) => {
  // debugger;
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.header}>
      <h1>LOGIN</h1>
      <LoginForm login={props.login} isAuth={props.isAuth} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
