import React from "react";
import AddTaskModal from "./AddTaskModal";
const AddTask = () => {
  return (
    <>
      <div className="container pt-5">
        <button
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#addTaskModal"
        >
          Add Task
        </button>
        
      </div>
      <AddTaskModal />
    </>
  );
};

export default AddTask;
