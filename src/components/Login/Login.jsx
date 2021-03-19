import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import withProfileRedirect from "../../hoc/withProfileRedirect";
import { login } from "../../Redux/auth-reducer";
import {
  maxLengthCreator,
  required,
  minLengthCreator,
} from "../../utils/validators/validators";
import { FormControl } from "../common/FormsContols/FormsControls";
import styles from "./Login.module.css";
const maxLength20 = maxLengthCreator(20);
const minLength6 = minLengthCreator(6);
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.login__field}>
        <Field
          placeholder="Email"
          name="email"
          typeField="input"
          component={FormControl}
          validate={[required, maxLength20]}
        />
      </div>
      <div className={styles.login__field}>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={FormControl}
          typeField="input"
          validate={[required, maxLength20, minLength6]}
        />
      </div>
      <div className={styles.login__field}>
        <Field
          typeField="input"
          component={FormControl}
          name="remember me"
          type="checkbox"
        />
        <div>remember me</div>
      </div>
      {error && <div className={styles.formSummaryError}>{error} </div>}
      <div>
        <button className={styles.login__btn}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__title}>Log in</div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default compose(
  withProfileRedirect,
  connect(mapStateToProps, { login })
)(Login);
