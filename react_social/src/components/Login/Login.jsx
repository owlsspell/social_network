import React from "react";
import { Form, Field } from "react-final-form";
import s from "./Login.module.css";

const LoginForm = (props) => {
  const onSubmit = (FormData) => {
    console.log(FormData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      // validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={s.loginForm}>
          <div>
            <Field
              name="login"
              type="text"
              placeholder="Login"
              component="input"
            />
          </div>
          <div>
            <Field
              name="password"
              type="text"
              placeholder="Password"
              component="input"
            />
          </div>
          <div>
            <Field name="rememberMe" type="checkbox" component="input" />
            Remember me
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    ></Form>
  );
};

const Login = (props) => {
  return (
    <div className={s.header}>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
