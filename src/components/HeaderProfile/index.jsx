import React, { useRef, useState } from "react";
import Button from "../Button/Button";

import "./HeaderProfile.scss";

/* Images */
import banner from "../../assets/images/capung.png";
import foto from "../../assets/images/foto.jpg";
import { Link, useLocation, useParams } from "react-router-dom";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";
import { Avatar } from "@mui/material";

const HeaderProfile = ({ data, getUserById }) => {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

  const tokenCookies = Cookies.get("token");
  const userId = Cookies.get("id");

  const [bannerImg, setBannerImg] = useState(banner);

  const [photoImg, setPhotoImg] = useState();

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

    // Cookies.set("data", JSON.stringify(data));
    // console.log(filePhoto);
  };

  const followHandleClick = async (e, guestUserId) => {
    e.preventDefault();
    let res = null;
    res = await fgdApi.followUser(guestUserId, tokenCookies);
    console.log(res.data);
    getUserById(guestUserId);
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
          {path === "/profile" ? (
            <>
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
            </>
          ) : (
            ""
          )}
        </div>

        <div className="profile-zzz">
          <Avatar className="foto" alt={data.username} src={data.image} />

          {path === "/profile" ? (
            <>
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
            </>
          ) : (
            ""
          )}
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
              ) : path === "/edit-profile" ? (
                ""
              ) : (
                <div className="editBtn">
                  {data.user_followers?.filter(
                    (is_follow) => is_follow.user_follower.id == userId
                  ).length > 0 ? (
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
