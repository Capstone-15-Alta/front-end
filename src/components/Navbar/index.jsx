import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logoNavbar.svg";

import IconProfile from "../IconProfile";

import Cookies from "js-cookie";

import Searchbar from "../Searchbar";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(!isLogin);
    }
  }, []);

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
          {isLogin ? (
            <>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Searchbar />
                </li>
                <li className="nav-item">
                  <Button
                    title="Buat Thread"
                    background="white"
                    type="button"
                    className="btn-create-new-thread"
                    iconKiri="iconCreate"
                  />
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <Link className="navbar-user-icon" to="/buat-thread">
                    <IconProfile />
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login">
                  <Button
                    title="Masuk"
                    type="button"
                    className="btn-nav-masuk"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register">
                  <Button
                    title="Daftar"
                    type="button"
                    className="btn-nav-daftar"
                  />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
