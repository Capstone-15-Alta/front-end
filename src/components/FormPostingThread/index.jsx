import React, { useState } from "react";

import "./FormPostingThread.scss";

import Users from "../Users";

import Button from "../Button/Button";

import axios from "axios";
import fgdApi from "../../api/fgdApi";
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
    // kategori: "",
    deskripsi: "",
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInitSelectValue(value);

    setInputs(newInputs);

    console.log(inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://reqres.in/api/", inputs);

    console.log(res);
  };

  const handleReset = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="form-post-user-thread"
    >
      <div className="user-profile-section">
        <div className="row user-form-post-thread">
          <Users />

          <div className="col-2 time-post">
            <p className="time-to-post">Hari ini 20:00</p>
          </div>
          <div className="col-3 options-thread-categories">
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
      </div>
      <div className="input-thread">
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

      <Button title="Kembali" type="reset" className="btn-form-kembali" />
      <Button title="Posting" type="submit" className="btn-form-posting" />
    </form>
  );
};

export default FormPostingThread;
