import React, { useState } from "react";

import "./FormPostingThread.scss";

import IconProfile from "../IconProfile";
import { Box } from "@mui/material";

const FormPostingThread = () => {
  const [categories, setCategories] = useState([
    "Olahraga",
    "Hobi",
    "Otomotoif",
    "Game",
  ]);

  const [initSelectValue, setInitSelectValue] = useState(categories[0]);

  const [inputs, setInputs] = useState({
    judul: "",
    kategori: "",
    deskripsi: "",
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInitSelectValue(value);

    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = (e) => {
    e.preventDefault();
  };

  return (
    <Box className="container" mt="10rem">
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="form-post-user-thread"
      >
        <div className="row form-posting-thread">
          <div className="user-thread">
            <div className="user-thread-icon">
              {/* <img src={IconProfile} alt="user icon" className="user-icon" /> */}
              <IconProfile />
            </div>
            <div className="user-name-and-email">
              <h5 className="user-name">Muhammad Yogi</h5>
              <p className="user-email">Muhamadyogi413@gmail.com</p>
            </div>
            <div className="user-check-icon">
              <img
                src="/assets/icon/check.png"
                alt="user icon"
                className="user-check"
              />
            </div>
            <div className="posting-time">
              <p className="time-to-post">Hari ini 20:00</p>
            </div>
            <div className="options-thread-categories">
              <select
                name="kategori"
                className="form-select shadow-none select-option-category"
                aria-label="Default select kategori wisata"
                defaultValue=""
                onChange={(e) => handleInput(e.target.value, e.target.name)}
              >
                <option value="" hidden>
                  Pilih Kategori
                </option>
                {categories.map((dataCategory, dataCategoryIdx) => (
                  <option key={dataCategoryIdx} value={dataCategory}>
                    {dataCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input
            type="text"
            className="form-control shadow-none thread-title"
            name="judul"
            placeholder="Isi Judul Thread Disini"
            value={inputs.judul}
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
          <textarea
            className="form-control shadow-none thread-desc"
            name="deskripsi"
            rows="7"
            placeholder="Apa Yang Ingin Anda Diskusikan ?"
            value={inputs.deskripsi}
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>
        <div className="button-area">
          <button type="reset" className="btn btn-kembali">
            Kembali
          </button>
          <button type="submit" className="btn btn-posting">
            Posting
          </button>
        </div>
      </form>
    </Box>
  );
};

export default FormPostingThread;
