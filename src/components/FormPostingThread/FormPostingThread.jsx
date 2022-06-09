import React, { useState } from "react";

import "./FormPostingThread.scss";

const FormPostingThread = () => {
  const [categories, setCategories] = useState([
    "Olahraga",
    "Hobi",
    "Otomotoif",
    "Game",
  ]);

  const [initSelectValue, setInitSelectValue] = useState(categories[0]);

  const [inputs, setInputs] = useState({
    namaWisata: "",
    kategori: "",
    alamat: "",
    deskripsi: "",
    gambar: "",
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInitSelectValue(value);

    setInputs(newInputs);
  };

  return (
    <div className="container">
      <div className="row form-posting-thread justify-content-center">
        <div className="user-thread">
          <div className="row">
            <div className="col">
              <img
                src="/assets/icon/man profil.png"
                alt="user icon"
                className="user-icon"
              />
            </div>
            <div className="col">
              <h5>Muhammad Yogi</h5>
              <p>Muhamadyogi413@gmail.com</p>
            </div>
            <div className="col">
              <img
                src="/assets/icon/check.png"
                alt="user icon"
                className="user-icon"
              />
            </div>
            <div className="col">
              <select
                name="kategori"
                className="form-select"
                aria-label="Default select kategori wisata"
                defaultValue=""
                id="kategori-wisata"
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
        <input
          type="text"
          className="form-control shadow-none"
          id="exampleFormControlInput1"
          placeholder="Isi Judul Thread Disini"
        />
        <textarea
          className="form-control shadow-none"
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="Apa Yang Ingin Anda Diskusikan ?"
        />
        {/* <div className="col-md-12">
          <div className="form-thread">
            <div className="row">
              <div className="col">
                <img
                  src="/assets/icon/man profil.png"
                  alt="user icon"
                  className="user-icon"
                />
              </div>
              <div className="col">
                <h5>Muhammad Yogi</h5>
                <p>Muhamadyogi413@gmail.com</p>
              </div>
              <div className="col">
                <img
                  src="/assets/icon/check.png"
                  alt="user icon"
                  className="user-icon"
                />
              </div>
              <div className="col">
                <select
                  name="kategori"
                  className="form-select"
                  aria-label="Default select kategori wisata"
                  defaultValue=""
                  id="kategori-wisata"
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
          <div className="title-thread">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Isi Judul Thread Disini"
            />
          </div>
          <div className="desc-thread">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              placeholder="Apa Yang Ingin Anda Diskusikan ?"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FormPostingThread;
