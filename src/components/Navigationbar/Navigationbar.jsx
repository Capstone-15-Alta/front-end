import React from "react";
import "./Navigationbar.scss";

import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
// import NavLogo from "../../../public/assets/logo/Group2.png";

import Searchbar from "../Searchbar/Searchbar";
import Button from "../button/Button";

const Navigationbar = () => {
  const navigate = useNavigate();

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
            <Button
              title="Buat Thread"
              // color="green"
              background="white"
              type="button"
              className="btn-create-new-thread"
              onClick={navigate("/buat-thread")}
            />
            <Link className="navbar-user-icon ms-auto" to="/">
              <img
                src="/assets/icon/man profil.png"
                alt="user icon"
                className="user-icon"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigationbar;
