import React, { useEffect, useState } from "react";
import "./Profile.scss";

import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";

const Profile = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.user);
  const [isCompleted, setIsCompleted] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line
    tasks?.data.map((el) => {
      if (el.completed) setIsCompleted(isCompleted + 1);
    });
    // eslint-disable-next-line
  }, []);
  const isNotCompleted = tasks?.count - isCompleted;
  return (
    <>
      <div className="profileContainer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 pt-4">
              <div className="card">
                <div className="card-body text-center px-5 py-4">
                  <div className="profilePicture mx-auto">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="name py-2">{user.name}</div>
                  <div className="d-flex justify-content-evenly">
                    <button className="btn btn-sm btn-dark">
                      Upload Photo
                    </button>
                    <button className="btn btn-sm btn-outline-dark">
                      Delete Photo
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-body text-center px-5 py-4">
                  <ul className="p-0">
                    <li className="d-flex justify-content-between">
                      <strong>
                        <i className="bi bi-facebook pe-2"></i>Facebook
                      </strong>
                      <a href="/profile">{user.name}</a>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>
                        <i className="bi bi-instagram pe-2"></i>Instagram
                      </strong>
                      <a href="/profile">{user.name}</a>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>
                        <i className="bi bi-twitter pe-2"></i>Twitter
                      </strong>
                      <a href="/profile">{user.name.toLowerCase()}</a>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>
                        <i className="bi bi-github pe-2"></i>GitHub
                      </strong>
                      <a href="/profile">{user.name.toLowerCase()}</a>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>
                        <i className="bi bi-linkedin pe-2"></i>LinkedIn
                      </strong>
                      <a href="/profile">{user.name}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-8 py-4">
              <div className="card">
                <div className="card-body px-5 pt-3 pb-3">
                  <ul className="p-0">
                    <li className="d-flex">
                      <strong className="col-4">Name:</strong>
                      <div className="col-6">{user.name}</div>
                      <div className="col-2 ps-5">
                        <i className="bi bi-pencil-fill"></i>
                      </div>
                    </li>
                    <li className="d-flex">
                      <strong className="col-4">Email:</strong>
                      <div className="col-6">{user.email}</div>
                    </li>
                    <li className="d-flex">
                      <strong className="col-4">Age:</strong>
                      <div className="col-6">{user.age}</div>
                      <div className="col-2 ps-5">
                        <i className="bi bi-pencil-fill"></i>
                      </div>
                    </li>
                    <li className="d-flex">
                      <strong className="col-4">Created at:</strong>
                      <div className="col-6">{user.createdAt}</div>
                    </li>
                    <li className="d-flex">
                      <strong className="col-4">Updated at:</strong>
                      <div className="col-6">{user.updatedAt}</div>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-end pt-3 pb-2">
                    <button className="btn btn-sm btn-outline-danger">
                      Delete profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-body px-5 py-4">
                  <strong>Total tasks: {tasks.count}</strong>
                  <div className="chart mt-4">
                    <PieChart
                      data={[
                        {
                          title: "Completed",
                          value: { isCompleted },
                          color: "#E38627",
                        },
                        {
                          title: "Not Completed",
                          value: { isNotCompleted },
                          color: "#C13C37",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
