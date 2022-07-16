import React from "react";

import "./Notification.scss";

import Button from "../Button/Button";

const Notification = ({ data }) => {
  const isRead = data.is_read;

  return (
    <>
      {isRead ? (
        <div className="comment-notif">
          <div className="row">
            <div className="col-11">
              <div className="top-section">
                <div className="user-image-section">
                  <img
                    src="/assets/icon/manProfile.png"
                    alt="user-images"
                    className="user-image"
                  />
                </div>
                <div className="header-section">
                  <h2 className="header-text">{data.title}</h2>
                </div>
              </div>
              <div className="mid-section">
                <p className="desc-notif">{data.message}</p>
              </div>
              <div className="bottom-section">
                <p className="date-notif">{data.created_at.substr(0, 10)}</p>
              </div>
            </div>
            <div className="col-1">
              <img
                src="/assets/icon/rubbish.png"
                alt="rubbish-images"
                className="delete-image"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="comment-notif"
          style={{ backgroundColor: "rgba(38, 184, 147, 0.1)" }}
        >
          <div className="row">
            <div className="col-11">
              <div className="top-section">
                <div className="user-image-section">
                  <img
                    src="/assets/icon/manProfile.png"
                    alt="user-images"
                    className="user-image"
                  />
                </div>
                <div className="header-section">
                  <h2 className="header-text">{data.title}</h2>
                </div>
              </div>
              <div className="mid-section">
                <p className="desc-notif">{data.message}</p>
              </div>
              <div className="bottom-section">
                <p className="date-notif">{data.created_at.substr(0, 10)}</p>
              </div>
            </div>
            <div className="col-1">
              <img
                src="/assets/icon/rubbish.png"
                alt="rubbish-images"
                className="delete-image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
