import React from "react";
import "./Navbar.scss";

import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logoNavbar.svg";

import IconProfile from "../IconProfile";

import Searchbar from "../Searchbar";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top customNav shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand navBrand" to="/">
          <img src={logo} alt="logo" className="navLogo" />
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
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Searchbar />
            </li>
            <li class="nav-item">
              <Button
                title="Buat Thread"
                background="white"
                type="button"
                className="btn-create-new-thread"
                iconKiri="iconCreate"
              />
            </li>
          </ul>

          <Link className="navbar-user-icon ms-auto" to="/">
            {/* <img src={IconProfile} alt="user icon" className="user-icon" /> */}
            <IconProfile />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
