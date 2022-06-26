import React, { useRef, useState } from "react";
import Button from "../Button/Button";

import "./HeaderProfile.scss";

/* Images */
import banner from "../../assets/images/capung.png";
import foto from "../../assets/images/foto.jpg";
import { Link } from "react-router-dom";

const HeaderProfile = ({ data }) => {
  const bannerRef = useRef(null);
  const [bannerImg, setBannerImg] = useState(banner);

  const handleClickUpload = () => {
    bannerRef.current.click();
  };
  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    setBannerImg(file);
    console.log(file);
  };

  return (
    <>
      <div className="headersss">
        <div className="banner">
          <div
            style={{ backgroundImage: `url(${bannerImg})` }}
            className="banner-image"
          ></div>
          <Button
            type="button"
            className=" btn btnChangeBanner "
            title="Ganti Gambar"
            background="#26b893"
            color="#fff"
            iconKiri="iconKamera"
            onClick={handleClickUpload}
          />
          <input
            type="file"
            className="d-none"
            ref={bannerRef}
            onChange={handleUploadImg}
          />
        </div>
        <div className="profile-zzz">
          <div
            style={{ backgroundImage: `url(${foto})` }}
            className="foto"
          ></div>
          <div className="dataProfile">
            <div className="nickname d-flex ">
              <div className="name-email">
                <p className="name">{data.username}</p>
                <p className="mail">{data.email}</p>
              </div>
              <div className="editBtn">
                <Link to="/edit-profile">
                  <Button
                    type="button"
                    className="btn btnEditProfile"
                    title="Edit Profile"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
