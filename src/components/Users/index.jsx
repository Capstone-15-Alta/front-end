import React from "react";

import "./Users.scss";

import IconProfile from "../IconProfile";

const Users = () => {
  return (
    <>
      <div className="col-1 user-pict">
        <IconProfile />
      </div>
      <div className="col-4 user-name-and-email">
        <h5 className="user-name">
          Muhammad Yogi
          <span className="user-verified-icon">
            <img
              src="/assets/icon/check.png"
              alt="user icon"
              className="user-check"
            />
          </span>
        </h5>
        <p className="user-email">Muhamadyogi413@gmail.com</p>
      </div>
    </>
  );
};

export default Users;
