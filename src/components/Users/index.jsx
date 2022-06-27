import React from "react";

import "./Users.scss";

import IconProfile from "../IconProfile";

const Users = ({ data }) => {
  return (
    <>
      <div className="col-1 user-pict">
        <IconProfile />
      </div>
      <div className="col-4 user-name-and-email">
        <h5 className="user-name">
          {data.username}
          <span className="user-verified-icon">
            <img
              src="/assets/icon/check.png"
              alt="user icon"
              className="user-check"
            />
          </span>
        </h5>
        <p className="user-email">{data.email}</p>
      </div>
    </>
  );
};

export default Users;
