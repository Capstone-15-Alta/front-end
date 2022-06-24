import React, { useState, useEffect } from "react";

import "./FormPostingThread.scss";

import Users from "../Users";

import Button from "../Button/Button";

import axios from "axios";
import fgdApi from "../../api/fgdApi";
import IconProfile from "../IconProfile";
import { Box } from "@mui/material";

const FormPostingThread = () => {
  const [threadCategory, setThreadCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getCategory(params);
      setThreadCategory(res.data);
    };

    getCategory();
  }, []);

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category_id: "",
  });

  const [message, setMessage] = useState("");

  const [fileName, setFileName] = useState();

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInputs(newInputs);

    console.log(newInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IkFETUlOIiwiaWQiOjIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NTU5OTYzMjcsImV4cCI6MTY1NjM1NjMyN30.ntPY2FF8YB0M12PMicRidqM1gwWW3a6-7QUPd_xNHnM";

    const formData = new FormData();
    // formData.set("json", JSON.stringify(inputs));
    // formData.set("file", ...); // BUAT FILE

    formData.append("json", JSON.stringify(inputs));
    formData.append("file", fileName);

    const res = await axios.post(
      "http://34.87.175.218/api/v1/thread",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(inputs);
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
              name="category_id"
              className="form-select shadow-none select-option-category"
              aria-label="Default select kategori thread"
              defaultValue=""
              onChange={(e) => handleInput(e.target.value, e.target.name)}
            >
              <option value="" hidden>
                Pilih Kategori
              </option>
              {threadCategory.map((item, itemIdx) => (
                <option key={itemIdx} value={item.id}>
                  {item.category_name}
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
          name="title"
          placeholder="Isi Judul Thread Disini"
          value={inputs.title}
          onChange={(e) => handleInput(e.target.value, e.target.name)}
        />
        <textarea
          className="form-control shadow-none thread-desc"
          name="description"
          rows="7"
          placeholder="Apa Yang Ingin Anda Diskusikan ?"
          value={inputs.description}
          onChange={(e) => handleInput(e.target.value, e.target.name)}
        />
      </div>

      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            className="form-control"
            id="gambar-wisata"
            required
            type="file"
            onChange={(e) => setFileName(e.target.files[0])}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-10">
          <img
            src={fileName.name}
            height="300px"
            width="100%"
            alt="...."
            style={{ borderRadius: "15px" }}
          />
        </div>
      </div>

      <Button title="Kembali" type="reset" className="btn-form-kembali" />
      <Button title="Posting" type="submit" className="btn-form-posting" />
    </form>
  );
};

export default FormPostingThread;
