import React from "react";
import "./Searchbar.scss";

import iconSearch from "../../assets/icon/iconSearch.png";

const Searchbar = () => {
  return (
    <div className="input-search">
      <input
        type="text"
        className="form-control input-field"
        id="search"
        placeholder="Cari Topik Diskusi Disini Yuk"
        autoComplete="off"
      />
      <img src={iconSearch} alt="icon search" className="icon-search" />
    </div>
  );
};

export default Searchbar;
