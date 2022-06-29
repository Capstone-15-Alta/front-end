import React, { useRef, useState } from "react";
import Button from "../Button/Button";

import "./HeaderProfile.scss";

/* Images */
import banner from "../../assets/images/capung.png";
import foto from "../../assets/images/foto.jpg";
import { Link, useLocation, useParams } from "react-router-dom";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

const HeaderProfile = ({ data, getUserById }) => {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const bannerRef = useRef(null);
  const imageRef = useRef(null);
  const [bannerImg, setBannerImg] = useState(banner);
  const [photoImg, setPhotoImg] = useState();
  const tokenCookies = Cookies.get("token");
  const userId = Cookies.get("id");

  const [isFollow, setIsFollow] = useState(null);

  const uploadImage = async () => {
    let res = null;
    res = await fgdApi.uploadPhoto(tokenCookies, tokenCookies);
    console.log(res.data);
    setIsFollow(res.data?.is_follow);
  };

  const handleClickImage = () => {
    imageRef.current.click();
  };

  const handleClickBanner = () => {
    bannerRef.current.click();
  };

  const handleUploadBanner = (e) => {
    const file = e.target.files[0];
    setBannerImg(file);
    console.log(file);
  };

  const handleUploadImage = async (e) => {
    const filePhoto = e.target.files[0];
    let res = null;
    const formData = new FormData();
    formData.set("file", filePhoto);

    res = await fgdApi.uploadPhoto(tokenCookies, formData);
    console.log(res.data);
    getUserById(userId);
    // console.log(filePhoto);
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
  console.log(data);

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
            onClick={handleClickBanner}
          />
          <input
            type="file"
            className="d-none"
            ref={bannerRef}
            onChange={handleUploadBanner}
          />
        </div>
        <div className="profile-zzz">
          <div
            style={{ backgroundImage: `url(${data.image})` }}
            className="foto"
          >
            {" "}
            <Button
              type="button"
              className=" btn btnChangeImage "
              background="#26b893"
              color="#fff"
              iconKiri="iconKamera"
              onClick={handleClickImage}
            />
            <input
              type="file"
              className="d-none"
              ref={imageRef}
              onChange={handleUploadImage}
            />
          </div>
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
