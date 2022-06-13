import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import Button from "../button/Button";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <>
      {location === "/login" || location === "/signup" ? (
        <nav className="navbar navbar-expand-lg    ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/#" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <Button
                      className=" btn signin"
                      title="Sign in"
                      color="#fff "
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <Button className=" btn signup" title="Sign up" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg    ">
          <div className="container ">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="search-bar d-flex ms-4 ">
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </form>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/#" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
