import React from "react";

import "./LoginForm.scss";

import { useNavigate } from "react-router-dom";

import { Field, reduxForm, SubmissionError } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../actions/auth";
import { useState } from "react";

import { toast } from "react-toastify";

const renderField = ({
  type,
  input,
  placeholder,
  meta: { touched, error },
}) => (
  <div className="inputRow">
    {touched && error && <span className="error">{error}</span>}
    <br></br>
    <div className="form-floating">
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={
          error ? "w-100 form-control mb-3 error" : "w-100 form-control mb-3"
        }
      />
      <label>{placeholder}</label>
    </div>
  </div>
);

const LoginFormFunc = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);

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
          toast.success("User logged in successfully!", {
            toastId: "successLogin",
          });
          navigate("/todolist");
        })
        .catch(() => {
          setLoading(false);
          message === "Network Error"
            ? toast.error("Our server is under maintenance!", {
                toastId: "networkError",
              })
            : toast.error("Invalid credentials!", { toastId: "errorLogin" });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="container px-0">
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
            Remember me
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
