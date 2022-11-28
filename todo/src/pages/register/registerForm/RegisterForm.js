import React from "react";

import "./RegisterForm.scss";

import { useNavigate } from "react-router-dom";

import { Field, reduxForm, SubmissionError } from "redux-form";
import { useDispatch } from "react-redux";

import { register } from "../../../actions/auth";
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
        min="1"
        max="100"
      />
      <label>{placeholder}</label>
    </div>
  </div>
);

const RegisterFormFunc = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submit = ({
    name = "",
    email = "",
    password = "",
    confirmPassword = "",
    age = "",
  }) => {
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
    if (password.length < 7) {
      error.password = "Password too short";
      isError = true;
    }
    if (confirmPassword === "") {
      error.confirmPassword = "Required";
      isError = true;
    }
    if (confirmPassword !== password) {
      error.confirmPassword = "Passwords do not match";
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
      dispatch(register(name, email, password, age))
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setLoading(false);
          toast.error("Email address is linked to another account!", {
            toastId: "errorRegister",
          });
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
        <div className="d-flex justify-content-between">
          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="Password"
          />
          <Field
            name="confirmPassword"
            component={renderField}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
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
