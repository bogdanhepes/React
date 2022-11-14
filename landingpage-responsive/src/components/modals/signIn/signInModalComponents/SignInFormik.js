import React from "react";

import "./SignInFormik.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//import { useSelector } from "react-redux";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("*Invalid Email Format*")
    .required("*Email is required*"),
  password: Yup.string().required("*Password is required*"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInFormik = () => {
  //const { users } = useSelector((state) => state);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          // users.map((el) =>
          //   el.email === values.email && el.password === values.password
          //     ? console.log("user signed in")
          //     : console.log("user not signed in")
          // );
          console.log("user signed in");
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="signInFormikContainer">
              <div className="container p-0">
                <Form>
                  <div className="formRow flex-column d-flex px-4 pb-3">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="formRow flex-column d-flex px-4 pb-4">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="modal-footer px-4 ">
                    <button
                      id="closeModal"
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className={
                        !(dirty && isValid)
                          ? "signInBtn btn btn-danger disabled"
                          : "signInBtn btn btn-danger"
                      }
                      disabled={!(dirty && isValid)}
                    >
                      Sign In
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default SignInFormik;
