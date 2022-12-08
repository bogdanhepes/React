import React, { useEffect, useState } from "react";
import "../../global/Components.scss";
import { useDispatch } from "react-redux";
import { getTasks } from "../../actions/tasks";
import Header from "../../components/header/Header";
import AddTask from "./addTask/AddTask";
import ToDoListTable from "./todoListTable/ToDoListTable";
import { toast } from "react-toastify";
const ToDoList = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getTasks())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load data!", { toastId: "errorDataLoad" });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <AddTask />
      {loading ? <div className="pulse"></div> : <ToDoListTable />}
    </>
  );
};

export default ToDoList;
