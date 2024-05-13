import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Enabled dark mode", "success");
    } else if (mode === "dark") {
      setMode("light");
      showAlert("Enabled light mode", "<success></success>");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search"></form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
