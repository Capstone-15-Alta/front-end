import React, { useRef } from "react";
import Button from "../Button/Button";
import "./HeaderProfile.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";
import { Avatar } from "@mui/material";
import Swal from "sweetalert2";

const HeaderProfile = ({ data, getUserById }) => {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

  const tokenCookies = Cookies.get("token");
  const userId = Cookies.get("id");
  const roles = Cookies.get("roles");

  const handleClickImage = () => {
    imageRef.current.click();
  };

  const handleClickBanner = () => {
    bannerRef.current.click();
  };

  const handleUploadBanner = async (e) => {
    const fileBanner = e.target.files[0];

    try {
      const formData = new FormData();
      formData.set("file", fileBanner);
      await fgdApi.uploadBanner(tokenCookies, formData);
      getUserById(userId);

      Swal.fire({
        title: "Success",
        text: "Banner berhasil diganti!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Terjadi Kesalahan, silahkan upload gambar dengan ukuran lebih kecil",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleUploadImage = async (e) => {
    const filePhoto = e.target.files[0];
    try {
      const formData = new FormData();
      formData.set("file", filePhoto);
      await fgdApi.uploadPhoto(tokenCookies, formData);
      getUserById(userId);
      Swal.fire({
        title: "Success",
        text: "Foto berhasil diganti!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Terjadi Kesalahan, silahkan upload gambar dengan ukuran lebih kecil",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const followHandleClick = async (e, guestUserId) => {
    e.preventDefault();
    await fgdApi.followUser(guestUserId, tokenCookies);
    getUserById(guestUserId);
  };

  const handleToUser = async (e, id) => {
    e.preventDefault();
    let res = null;
    res = await fgdApi.changeRoleUser(id, tokenCookies);
    getUserById(id);
  };

  const handleToModerator = async (e, id) => {
    e.preventDefault();
    let res = null;
    res = await fgdApi.changeRoleModerator(id, tokenCookies);
    getUserById(id);
  };

  return (
    <>
      <div className="headersss">
        <div className="banner">
          <div
            style={{ backgroundImage: `url(${data.image_cover})` }}
            className="banner-image"
          ></div>
          {path === "/profile" || "/edit-profile" ? (
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

          {path === "/profile" || "edit-profile" ? (
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
              {data.roles == "Admin" && null}
              {roles == "ADMIN" && data.roles == "USER" && (
                <button
                  onClick={(e) => {
                    handleToModerator(e, data.id);
                  }}
                  className="button-mod"
                >
                  Jadikan Moderator
                </button>
              )}
              {roles == "ADMIN" && data.roles == "MODERATOR" && (
                <button
                  onClick={(e) => {
                    handleToUser(e, data.id);
                  }}
                  className="button-mod"
                >
                  {" "}
                  Jadikan User
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
