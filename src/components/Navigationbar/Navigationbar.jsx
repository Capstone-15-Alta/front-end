import React from "react";
import "./Navigationbar.scss";

import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD

import iconMan from "../../images/icon/manProfile.png";
import logo from "../../images/logo/Group2.png";
=======
import NavLogo from "../../images/navlogo.png";

import IconProfile from "../IconProfile/IconProfile";
>>>>>>> a8e27c650a502e40f9612f8548770d0018220e52

import Searchbar from "../Searchbar/Searchbar";
import Button from "../button/Button";

const Navigationbar = () => {
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
          />
          <Link className="navbar-user-icon ms-auto" to="/">
<<<<<<< HEAD
            <img src={iconMan} alt="user icon" className="user-icon" />
=======
            {/* <img src={IconProfile} alt="user icon" className="user-icon" /> */}
            <IconProfile />
>>>>>>> a8e27c650a502e40f9612f8548770d0018220e52
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
