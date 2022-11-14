import React from "react";

import "./RegisterForm.scss";

import { useNavigate } from "react-router-dom";

import { Field, reduxForm, SubmissionError } from "redux-form";
import { useDispatch } from "react-redux";

import { register } from "../../../actions/auth";
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

const RegisterFormFunc = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submit = ({ name = "", email = "", password = "", age = 0 }) => {
    let error = {};
    let isError = false;

    if (name === "") {
      error.name = "Required";
      isError = true;
    }
    if (email === "") {
      error.email = "Required";
      isError = true;
    }
    if (password === "") {
      error.password = "Required";
      isError = true;
    }
    if (age === "") {
      error.age = "Required";
      isError = true;
    }
    if (isError) {
      throw new SubmissionError(error);
    } else {
      setLoading(true);
      dispatch(register(name, email, password, parseInt(age)))
        .then(() => {
          navigate("/");
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
          name="name"
          component={renderField}
          type="text"
          placeholder="Name"
        />
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

        <Field
          name="age"
          component={renderField}
          type="number"
          placeholder="Age"
        />
        <button type="submit" className="btn btn-dark w-100 my-3 mt-3">
          {loading ? (
            <div
              className="spinner-border spinner-border-sm"
              role="status"
            ></div>
          ) : (
            <label>Register</label>
          )}
        </button>
      </div>
    </form>
  );
};

const RegisterForm = reduxForm({
  form: "register",
})(RegisterFormFunc);

export default RegisterForm;
