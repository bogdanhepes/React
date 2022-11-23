import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, getTasks } from "../../../actions/tasks";
import { toast } from "react-toastify";
const AddTaskModal = () => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const clearTextInputValue = () => {
    document.getElementById("textInput").value = "";
  };

  return (
    <>
      <div
        className="modal fade"
        id="addTaskModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Add Task</h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => clearTextInputValue()}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label>Task description:</label>
              <input
                id="textInput"
                className="ms-3"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                id="close-btn"
                type="button"
                onClick={() => clearTextInputValue()}
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  setLoading(true);
                  dispatch(addTask(description))
                    .then(() => {
                      dispatch(getTasks()).then(() => {
                        setLoading(false);
                        clearTextInputValue();
                        setTimeout(() => {
                          window.location.reload();
                        }, 3000);
                        toast.success("Task added successfully!", {
                          toastId: "successAdd",
                        });
                      });
                    })
                    .catch(() => {
                      setLoading(false);
                      toast.error("Failed to add task!", {
                        toastId: "errorAdd",
                      });
                    });
                }}
              >
                {loading ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  ></div>
                ) : (
                  <label>Save Changes</label>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
