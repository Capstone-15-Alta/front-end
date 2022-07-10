import React from "react";
import "./Searchbar.scss";

import iconSearch from "../../assets/icon/iconSearch.png";

const Searchbar = ({ value, handleInputSearch, handleKeyDown }) => {
  return (
    <div className="input-search">
      <input
        type="text"
        className="form-control input-field"
        id="search"
        placeholder="Cari Topik Diskusi Disini Yuk"
        autoComplete="off"
        name="title"
        value={value}
        onChange={(e) => handleInputSearch(e.target.value, e.target.name)}
        onKeyDown={handleKeyDown}
      />
      <img src={iconSearch} alt="icon search" className="icon-search" />
    </div>
  );
};

export default Searchbar;
