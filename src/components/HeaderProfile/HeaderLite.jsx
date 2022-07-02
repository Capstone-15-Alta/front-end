import React from "react";
import Icon from "../../assets/images/icon-profile.png";
import Button from "../Button/Button";

const HeaderLite = () => {
  return (
    <>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-8  ">
          <div className="d-flex ">
            <div className="photo-user col-md-1">
              <img src={Icon} alt="foto-profil" />
            </div>
            <div className="name-email col-md-5 ms-3">
              <p className="name">Namasaya28</p>
              <p className="mail">hahah@gmail.com</p>
            </div>
            <div className="editBtn col-md-2 ms-auto">
              <Button
                type="button"
                className="btn btnIkuti"
                title="+ Ikuti"
                // onClick={(e) => {
                //   followHandleClick(e, id);
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLite;
