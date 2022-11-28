import React, { useEffect, useState } from "react";
import "./EditTaskModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, getTasks } from "../../../actions/tasks";
import { toast } from "react-toastify";
const EditTaskModal = () => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.tasks);

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(task?.data.description);
  const [completed, setCompleted] = useState(task?.data.completed);

  useEffect(() => {
    setDescription(task?.data.description);
    setCompleted(task?.data.completed);
  }, [task]);

  const clearInputValue = () => {
    document.getElementById("editTextInput").value = "";
    document.getElementById("checkboxInput").checked = false;
  };

  const handleEditTask=(id,edits)=>{
    setLoading(true);
    dispatch(
      updateTask(id, edits)
    )
      .then(() => {
        dispatch(getTasks()).then(() => {
          setLoading(false);
          clearInputValue();
          toast.success("Task edited successfully!", {
            toastId: "successEdit",
          });
        });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to edit task!", {
          toastId: "errorEdit",
        });
      });
  }

  return (
    <>
      <div
        className="modal fade"
        id="EditTaskModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit Task</h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => clearInputValue()}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-left">
              {!task ? (
                <div>
                  <br></br>
                  <div className="pulse"></div>
                  <br></br>
                </div>
              ) : (
                <div>
                  <label>
                    Task current description: {task?.data.description}
                  </label>
                  <br></br>
                  <div>
                    <label>New description:</label>
                    <input
                      id="editTextInput"
                      className="ms-3"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <br></br>
                  <label className="mt-2">
                    Task current completion value:{" "}
                    {task?.data.completed ? "completed" : "not completed"}
                  </label>
                  <br></br>
                  <div>
                    <label>Mark task as completed?</label>
                    <input
                      id="checkboxInput"
                      type="checkbox"
                      disabled={task?.data.completed ? true : false}
                      className="form-check-input ms-3"
                      onChange={(e) => setCompleted(e.target.checked)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                id="close-btn"
                type="button"
                onClick={() => clearInputValue()}
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => handleEditTask(task?.data._id,{ description, completed })}
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

export default EditTaskModal;
