import React from "react";
import "./Navbar.scss";

import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import NavLogo from "../../assets/images/navlogo.png";

import IconProfile from "../IconProfile";

import Searchbar from "../Searchbar";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top customNav shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand navBrand" to="/">
          <img src={NavLogo} alt="logo" className="navLogo" />
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

          <Button
            title="Buat Thread"
            background="white"
            type="button"
            className="btn-create-new-thread"
            iconKiri="iconCreate"
          />
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
