import React from "react";
import "./Navigationbar.scss";

import { Link, NavLink } from "react-router-dom";
// import NavLogo from "../../../public/assets/logo/Group2.png";

import Searchbar from "../Searchbar/Searchbar";

const Navigationbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top customNav shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand navBrand" to="/">
            <img src="/assets/logo/Group2.png" alt="logo" className="navLogo" />
            <span className="textLogo">Forum Group Diskusi</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Searchbar />
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Features
                </Link>
              </li>
              
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigationbar;
