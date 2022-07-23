import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = () => {
      navigate("/");
    }

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-main-text">Enter your username and password!</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="login-input"
        ></input>
        <input
          securetextentry="true"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="password-input"
        ></input>
        <button
          onClick={handleClick}
          className="login-button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
