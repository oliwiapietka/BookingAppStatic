import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <div className="logo">BOOKING</div>
      </Link>
      <div className="other-container">
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div>Home</div>
        </Link>
        <div className="contact-button">Contact</div>
          <>
            <div className="register-button">Register</div>
            <Link
              to="/login"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <div className="navbar-login-button">Login</div>
            </Link>
          </>
      </div>
    </div>
  );
};

export default NavBar;
