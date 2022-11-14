import React from "react";

import "./LoginForm.scss";

import { useNavigate } from "react-router-dom";

import { Field, reduxForm, SubmissionError } from "redux-form";
import { useDispatch } from "react-redux";

import { login } from "../../../actions/auth";
import { useState } from "react";

const renderField = ({
  type,
  input,
  placeholder,
  meta: { touched, error },
}) => (
  <div className="inputRow">
    {touched && error && <span className="error">{error}</span>}
    <br></br>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={error ? "w-100 mb-3 error" : "w-100 mb-3"}
    />
    <br></br>
  </div>
);

const LoginFormFunc = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submit = ({ email = "", password = "", checkbox = "" }) => {
    let error = {};
    let isError = false;

    if (email === "") {
      error.email = "Required";
      isError = true;
    }
    if (password === "") {
      error.password = "Required";
      isError = true;
    }
    if (isError) {
      throw new SubmissionError(error);
    } else {
      setLoading(true);
      dispatch(login(email, password))
        .then(() => {
          navigate("/todolist");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="container ">
        <Field
          name="email"
          component={renderField}
          type="email"
          placeholder="Email address"
        />
        <Field
          name="password"
          component={renderField}
          type="password"
          placeholder="Password"
        />
        <div className="ps-1 py-1 d-flex align-items-center">
          <Field name="checkbox" component="input" type="checkbox" />
          <strong htmlFor="rememberUser" className="ps-2">
            Remember me on this computer
          </strong>
        </div>
        <button type="submit" className="btn btn-dark w-100 my-3 mt-3">
          {loading ? (
            <div
              className="spinner-border spinner-border-sm"
              role="status"
            ></div>
          ) : (
            <label>Log In</label>
          )}
        </button>
      </div>
    </form>
  );
};

const LoginForm = reduxForm({
  form: "login",
})(LoginFormFunc);

export default LoginForm;
