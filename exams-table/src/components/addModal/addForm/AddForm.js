import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import Submit from "./submit";

const renderField = ({
  type,
  input,
  placeholder,
  meta: { touched, error },
}) => (
  <div className="form-floating">
    {touched && error && <span className="error">{error}</span>}
    <br></br>
    <div className="form-floating">
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={error ? "w-100 form-control error" : "w-100 form-control"}
        id="textInput"
      />
      <label>{placeholder}</label>
    </div>
    <br></br>
  </div>
);

const afterSubmit = (result, dispatch) => dispatch(reset("addSubject"));

const AddSubjectForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <Field
              name="subject"
              component={renderField}
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="col-6">
            <Field
              name="credits"
              component={renderField}
              type="number"
              placeholder="Credits"
            />
          </div>
          <div className="col-6">
            <Field
              name="labTestDate"
              component={renderField}
              type="date"
              placeholder="Lab Test Date"
            />
          </div>
          <div className="col-6">
            <Field
              name="mainExamDate"
              component={renderField}
              type="date"
              placeholder="Main Exam Date"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addSubject", // a unique identifier for this form
  onSubmit: Submit,
  onSubmitSuccess: afterSubmit,
})(AddSubjectForm);
