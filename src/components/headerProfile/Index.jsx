import React from "react";
import Button from "../../components/button/Button";

import "./Index.scss";

/* Images */
import banner from "../../images/capung.png";
import foto from "../../images/foto.jpg";

const HeaderProfile = () => {
  return (
    <>
      <div className="header-section">
        <div className="banner">
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="banner-image"
          ></div>
          <Button
            type="button"
            className=" btn btnChangeBanner "
            title="Ganti Gambar"
            background="#26b893"
            color="#fff"
            iconKiri="iconKamera"
          />
        </div>
        <div className="profile">
          <div style={{ backgroundImage: `url(${foto})` }} className="foto">
            {/* <img
                        src={foto}
                        // class="rounded-circle"
                        alt="foto profile"
                      /> */}
          </div>
          <div className="dataProfile">
            <div className="nickname d-flex ">
              <div className="name-email">
                <p className="name">Muhammad Yogi</p>
                <p className="mail">yogs23@jordan.us</p>
              </div>
              <div className="editBtn">
                <Button
                  type="button"
                  className="btn btnEditProfile"
                  title="Edit Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
