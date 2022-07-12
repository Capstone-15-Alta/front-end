import React from "react";

import "./IconProfile.scss";

const IconProfile = ({ data }) => {
  return <img src={data?.image} alt="user icon" className="user-icon" />;
};

export default IconProfile;
