import React, { useState, useEffect } from "react";

import "./FormPostingThread.scss";

import { useSelector } from "react-redux";

import Cookies from "js-cookie";

import Users from "../Users";

import Button from "../Button/Button";

import axios from "axios";
import fgdApi from "../../api/fgdApi";
import IconProfile from "../IconProfile";
import { Box } from "@mui/material";
import moment from "moment";
import "moment/locale/id";

const FormPostingThread = () => {
  const [threadCategory, setThreadCategory] = useState([]);
  // const { token } = useSelector((state) => state.login);
  // console.log(token);
  const token = Cookies.get("token");
  const dataUser = JSON.parse(Cookies.get("data"));

  const time = moment().format("LLLL");

  useEffect(() => {
    const getCategory = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getCategory(params);
      setThreadCategory(res.data);
    };
    console.log(token);
    console.log(dataUser);
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

    const formData = new FormData();
    // formData.set("json", JSON.stringify(inputs));
    // formData.set("file", ...); // BUAT FILE

    formData.append("json", JSON.stringify(inputs));
    formData.append("file", fileName);

    const addThread = async () => {
      let res = null;
      res = await fgdApi.postThread(formData, token);
      console.log(res);
    };

    console.log(inputs);
    addThread();
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
          <Users data={dataUser} />

          <div className="col-2 time-post">
            <p className="time-to-post">Hari ini, {time}</p>
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
            src={fileName}
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
