import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import "./Login.css";
function Login() {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const emailValidation = (e) => {
    const re = /^\S+@\S+\.\S+$/;
    const val = e.target.value;
    const target = val.toLowerCase();
    if (e.target.value.toLowerCase().match(re)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const passwordValidation = (e) => {
    if (e.target.value.length >= 6) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  return (
    <div className="login">
      <small className="status">
        <a href="#">guidestar.in</a>
      </small>
      <div className="loginContainer">
        <div className="loginBox">
          <h1 className="title">Login or Sign up</h1>
          <div className="fields">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => emailValidation(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => passwordValidation(e)}
            />
          </div>
          <button
            className={
              isEmail === true && isPassword === true
                ? "blueButton"
                : "blueButton disabled"
            }
          >
            Continue
          </button>
        </div>
      </div>
      <h1 className="feedback">Better Feedback</h1>
    </div>
  );
}

export default Login;
