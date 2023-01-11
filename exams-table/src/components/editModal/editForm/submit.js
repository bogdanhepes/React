// import { SubmissionError } from "redux-form";
import React from "react";

import { useSelector } from "react-redux";
import { getSubjects, updateSubject } from "../../../redux/actions/subjects";

const Submit = (values, dispatch) => {
  //   let error = {};
  //   let isError = false;
  //   if (values.subject === "") {
  //     isError = true;
  //     throw new SubmissionError("Subject name required!");
  //     // error.subject = "Required";
  //   }
  //   if (values.labTestDate === "") {
  //     isError = true;
  //     throw new SubmissionError("Subject name required!");
  //     error.labTestDate = "Required";
  //   }
  //   if (values.mainExamDate === "") {
  //     isError = true;
  //     throw new SubmissionError("Subject name required!");
  //     error.mainExamDate = "Required";
  //   }
  //   if (values.credits === "") {
  //     isError = true;
  //     throw new SubmissionError("Subject name required!");
  //     error.credits = "Required";
  //   }
  //   if (isError ) {
  //     throw new SubmissionError(error);
  //     console.log("error");
  //   } else {

  //   }
  //   console.log(subject);
//   const { subject } = useSelector((state) => state.subjects);
//   console.log(subject);
//   dispatch(
//     updateSubject(subject.id, {
//       subject: values?.subject?.toUpperCase(),
//       labTestDate: values?.labTestDate,
//       labTestGrade: 0,
//       mainExamDate: values?.mainExamDate,
//       mainExamGrade: 0,
//       credits: values?.credits,
//       finalGrade: 0,
//     })
//   ).then(() => dispatch(getSubjects()).then(() => console.log("done")));

//   //   return { Submit };
//   return;
};

export default Submit;
