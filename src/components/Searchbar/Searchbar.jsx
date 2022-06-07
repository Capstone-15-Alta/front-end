import React from "react";
import "./Searchbar.scss";

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
      <img
        src="/assets/icon/Vector search.png"
        alt="icon search"
        className="icon-search"
      />
    </div>
  );
};

export default Searchbar;
