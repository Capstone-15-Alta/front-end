import React, { useState, useEffect } from "react";
import "./FormPostingThread.scss";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Cookies from "js-cookie";
import Users from "../Users";
import Button from "../Button/Button";
import Swal from "sweetalert2";
import fgdApi from "../../api/fgdApi";
import moment from "moment";
import "moment/locale/id";

const FormPostingThread = () => {
  const [threadCategory, setThreadCategory] = useState([]);

  const [userAttribute, setUserAttribute] = useState({});

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category_id: "",
  });

  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");
  const userId = Cookies.get("id");
  const time = moment().format("LT");

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };
    newInputs[key] = value;
    setInputs(newInputs);
  };

  const getUserById = async (id) => {
    let res = null;
    res = await fgdApi.getUserById(id, token);
    const data = res.data;
    setUserAttribute(data);
  };

  const getCategory = async () => {
    let res = null;
    const params = {};
    res = await fgdApi.getCategory(params);
    setThreadCategory(res.data);
  };

  useEffect(() => {
    getUserById(userId);
    getCategory();
  }, []);

  // Dropzone Hanlder
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img
          src={file.preview}
          className="imgs"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="drop-down-img"
        />
      </div>
    </div>
  ));

  // Get Image and Preview It
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const addThread = async (formData) => {
    let res = null;
    res = await fgdApi.postThread(formData, token);

    if (res.message === "Success!") {
      await Swal.fire({
        title: "Success",
        text: "Thread Berhasil Diposting !",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
        timerProgressBar: true,
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Failed",
        text: "Pastikan File Yang Anda Upload adalah Gambar",
        icon: "error",
        confirmButtonText: "OK",
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("json", JSON.stringify(inputs));
    formData.append("file", files[0]);
    addThread(formData);
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
          <Users data={userAttribute} />
          <div className="col-2  ms-4 time-post">
            <p className="time-to-post">Hari ini, {time}</p>
          </div>
          <div className="col-3 options-thread-categories ms-auto">
            <select
              name="category_id"
              required
              className="form-select shadow-none select-option-category"
              aria-label="Default select kategori thread"
              defaultValue=""
              onChange={(e) => handleInput(e.target.value, e.target.name)}
            >
              <option value="" hidden>
                Pilih Kategori
              </option>
              {threadCategory.map((item, itemIdx) => (
                <option  key={itemIdx} value={item.id}>
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
          required
          name="title"
          placeholder="Isi Judul Thread Disini"
          value={inputs.title}
          onChange={(e) => handleInput(e.target.value, e.target.name)}
        />
        <textarea
          className="form-control shadow-none thread-desc"
          required
          name="description"
          rows="7"
          placeholder="Apa Yang Ingin Anda Diskusikan ?"
          value={inputs.description}
          onChange={(e) => handleInput(e.target.value, e.target.name)}
        />
      </div>

      <section
        className="container container-dropzone"
        style={{ marginTop: "0px" }}
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="place-image text-center py-5">
            Drag dan drop beberapa file di sini, atau klik untuk memilih file
          </p>
        </div>
        <aside className="thumbsContainer">{thumbs}</aside>
      </section>

      <div className="button-area">
        <Button title="Posting" type="submit" className="btn-form-posting" />
        <Button
          title="Kembali"
          type="reset"
          className="btn-form-kembali"
          onClick={() => navigate("/")}
        />
      </div>
    </form>
  );
};

export default FormPostingThread;
