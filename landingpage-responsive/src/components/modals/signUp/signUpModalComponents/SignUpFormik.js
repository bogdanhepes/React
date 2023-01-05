// import React from "react";

// import "./SignUpFormik.scss";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { addUser } from "../../../../redux/users/UsersActions";

// const signUpSchema = Yup.object().shape({
//   firstName: Yup.string().required("*First Name is required*"),
//   lastName: Yup.string().required("*Last Name is required*"),
//   email: Yup.string()
//     .email("*Invalid Email Format*")
//     .required("*Email is required*"),
//   password: Yup.string().required("*Password is required*"),
//   confirmPassword: Yup.string().required("*Cannot be blank.*"),
// });

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const SignUpFormik = () => {
//   let dispatch = useDispatch();

//   const handleSubmit = (user) => {
//    dispatch(addUser(user));
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={signUpSchema}
//         onSubmit={(values) => {
//           console.log("user created successfully");
//           handleSubmit(values);
//         }}
//       >
//         {(formik) => {
//           const { errors, touched, isValid, dirty } = formik;
//           return (
//             <div className="signUpFormikContainer">
//               <div className="container p-0">
//                 <Form>
//                   <div className="row d-flex px-4 pt-3">
//                     <div className="col d-flex flex-column pb-4">
//                       <label htmlFor="firstName">First Name</label>
//                       <Field
//                         type="firstName"
//                         name="firstName"
//                         id="firstName"
//                         className={
//                           errors.firstName && touched.firstName
//                             ? "input-error"
//                             : null
//                         }
//                       />
//                       <ErrorMessage
//                         name="firstName"
//                         component="span"
//                         className="error"
//                       />
//                     </div>
//                     <div className="col d-flex flex-column pb-4">
//                       <label htmlFor="lastName">Last Name</label>
//                       <Field
//                         type="lastName"
//                         name="lastName"
//                         id="lastName"
//                         className={
//                           errors.lastName && touched.lastName
//                             ? "input-error"
//                             : null
//                         }
//                       />
//                       <ErrorMessage
//                         name="lastName"
//                         component="span"
//                         className="error"
//                       />
//                     </div>
//                   </div>
//                   <div className="formRow flex-column d-flex px-4 pb-4">
//                     <label htmlFor="email">Email</label>
//                     <Field
//                       type="email"
//                       name="email"
//                       id="email"
//                       className={
//                         errors.email && touched.email ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="span"
//                       className="error"
//                     />
//                   </div>
//                   <div className="row d-flex px-4 pt-3">
//                     <div className="col d-flex flex-column pb-4">
//                       <label htmlFor="password">Password</label>
//                       <Field
//                         type="password"
//                         name="password"
//                         id="password"
//                         className={
//                           errors.password && touched.password
//                             ? "input-error"
//                             : null
//                         }
//                       />
//                       <ErrorMessage
//                         name="password"
//                         component="span"
//                         className="error"
//                       />
//                     </div>
//                     <div className="col d-flex flex-column pb-4">
//                       <label htmlFor="confirmPassword">Confirm Password</label>
//                       <Field
//                         type="password"
//                         name="confirmPassword"
//                         id="confirmPassword"
//                         className={
//                           errors.confirmPassword && touched.confirmPassword
//                             ? "input-error"
//                             : null
//                         }
//                       />
//                       <ErrorMessage
//                         name="confirmPassword"
//                         component="span"
//                         className="error"
//                       />
//                     </div>
//                   </div>
//                   <div className="modal-footer px-4 justify-content-between">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       data-bs-dismiss="modal"
//                     >
//                       Close
//                     </button>
//                     {/* {registering &&  */}
//                             {/* <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> */}
//                         {/* // } */}
//                     <button
//                       type="submit"
//                       className={
//                         !(dirty && isValid)
//                           ? "signInBtn btn btn-danger disabled"
//                           : "signInBtn btn btn-danger"
//                       }
//                       disabled={!(dirty && isValid)}
//                     >
//                       Create Account
//                     </button>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           );
//         }}
//       </Formik>
//     </>
//   );
// };

// export default SignUpFormik;
