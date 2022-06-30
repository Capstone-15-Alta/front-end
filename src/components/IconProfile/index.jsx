import React from "react";

import "./IconProfile.scss";

import Icon from "../../assets/images/icon-profile.png";

const IconProfile = ({ data }) => {
  return <img src={data} alt="user icon" className="user-icon" />;
};

export default IconProfile;
