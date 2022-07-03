import React, { useEffect, useState } from "react";
import Navigationbar from "../../components/Navbar";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import HeaderProfile from "../../components/HeaderProfile";
import "./EditProfile.scss";

import Cookies from "js-cookie";
import fgdApi from "../../api/fgdApi";

const EditProfile = () => {
  const [userAttribute, setUserAttribute] = useState({});
  const [listThread, setListThread] = useState([]);
  // const [userFollowing, setUserFollowing] = useState([]);

  const userId = Cookies.get("id");
  // const tokenCookies = Cookies.get("token");
  console.log(userId);

  const getUserById = async (id) => {
    let res = null;
    res = await fgdApi.getUserById(id);

    const data = res.data;
    console.log(data);
    setUserAttribute(data);
    // return res.data;
    console.log(userAttribute);
  };

  useEffect(() => {
    getUserById(userId);
  }, []);

  return (
    <>
      <Navigationbar />
      <div className="row">
        <div className="col-3">
          <SidebarLeft />
        </div>
        <div className="col-9">
          <div className="header-profile">
            <HeaderProfile data={userAttribute} getUserById={getUserById} />
          </div>

          <div className="Form">
            <div className="title-edit-profile">EditProfile</div>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Nama Awal
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Masukan Nama Awal"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Nama AKhir
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Masukan Nama Akhir"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Nomor Handphone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Masukan Nomor Handphone"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Muhammadyogi413@gmail.com"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Masukan Tanggal Lahir"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Tingkat Pendidikan
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Masukan Tingkat Pendidikan</option>
                  <option value="1">SMP</option>
                  <option value="2">SMA/SMK</option>
                  <option value="3">S1/D3</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Negara
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Masukan Negara"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Kota
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Masukan Kota"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Kode Pos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Masukan Kode POS"
                />
              </div>
              <div>
                <button className="btn-kembali">kembali</button>
                <button className="btn-simpan">simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
