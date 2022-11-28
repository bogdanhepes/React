import React, { useEffect, useState } from "react";
import "./Register.scss";

import RegisterForm from "./registerForm/RegisterForm";

import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      navigate("/todolist");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="container-fluid">
        {loading ? (
          <div className="pulse"></div>
        ) : (
          <div class="form-signup w-100 m-auto px-5 py-4">
            <h2 className="align-items-center text-center m-0 py-2">
              <strong className="text-dark p-0">Sign Up</strong>
            </h2>
            <RegisterForm />
            <div className="d-flex justify-content-between pt-2 pb-3">
              <div>Already have an account?</div>
              <Link to="/">
                <strong className="text-dark">LogIn here</strong>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
