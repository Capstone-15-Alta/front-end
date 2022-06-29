import React, { useRef, useState } from "react";
import Button from "../Button/Button";

import "./HeaderProfile.scss";

/* Images */
import banner from "../../assets/images/capung.png";
import foto from "../../assets/images/foto.jpg";
import { Link, useLocation, useParams } from "react-router-dom";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

const HeaderProfile = ({ data }) => {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const bannerRef = useRef(null);
  const [bannerImg, setBannerImg] = useState(banner);
  const tokenCookies = Cookies.get("token");

  const [isFollow, setIsFollow] = useState(null);

  const handleClickUpload = () => {
    bannerRef.current.click();
  };
  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    setBannerImg(file);
    console.log(file);
  };

  const followHandleClick = (e, threadUserId) => {
    e.preventDefault();

    const followUser = async () => {
      let res = null;
      res = await fgdApi.followUser(threadUserId, tokenCookies);
      console.log(res.data);
      setIsFollow(res.data?.is_follow);
    };

    followUser();
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
              {path === "/profile" ? (
                <div className="editBtn">
                  <Link to="/edit-profile">
                    <Button
                      type="button"
                      className="btn btnEditProfile"
                      title="Edit Profile"
                    />
                  </Link>
                </div>
              ) : (
                <div className="editBtn">
                  {isFollow === true ? (
                    <Button
                      type="button"
                      className="btn btnIkuti"
                      title="✓ mengikuti"
                      onClick={(e) => {
                        followHandleClick(e, id);
                      }}
                    />
                  ) : (
                    <Button
                      type="button"
                      className="btn btnIkuti"
                      title="+ Ikuti"
                      onClick={(e) => {
                        followHandleClick(e, id);
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
