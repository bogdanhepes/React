import React from "react";
import Header from "../../components/header/Header";
import ToDoListTable from "./todoListTable/ToDoListTable";
const ToDoList = () => {
  return (
    <>
      <Header />
      <ToDoListTable />
    </>
  );
};

export default ToDoList;
