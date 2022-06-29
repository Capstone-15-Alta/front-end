import { useState, useEffect } from "react";
import "./Sidebar.scss";
import image from "../../assets/icon-sidebar/team-logo.png";
import Plus from "../../assets/icon-sidebar/Plus.png";
import Plus1 from "../../assets/icon-sidebar/Plus (1).png";
import user from "../../assets/icon-sidebar/user-saran.png";
import ArrowUp from "../../assets/icon-sidebar/ArrowUp.png";
import man4 from "../../assets/icon-sidebar/man4.png";

import { data } from "./SidebarData";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import fgdApi from "../../api/fgdApi";

export const SidebarLeft = () => {
  return (
    <div className="sidebar-left">
      <ul>
        <p className="menu">MENU</p>
        {data.left.map((val, index) => {
          const token = Cookies.get("token");

          token
            ? (data.left[3].link = "/profile")
            : (data.left[3].link = "/login");

          return (
            <Link to={val.link} key={index}>
              <li
                key={index}
                className={
                  window.location.pathname === val.link ? "li-active" : null
                }
              >
                <div className="icon">
                  {window.location.pathname === val.link ? val.icon2 : val.icon}
                </div>

                <div className="text">{val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="sidebar-group">
        <div className="sidebar-bg-color">
          <img src={image} alt="" width={200} className="sidebar-image" />
          <button className="rounded">
            <img src={ArrowUp} alt="" /> Mari Berdiskusi
          </button>
        </div>
      </div>
    </div>
  );
};

export const SidebarRight = () => {
  const [allUser, setAllUser] = useState([]);
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  useEffect(() => {
    const getAllUser = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getAllUser(params);
      // console.log(res.data);
      setAllUser(res.data);
    };

    getAllUser();
  }, []);
  const followHandleClick = (id) => {
    const followUser = async () => {
      let res = null;
      res = await fgdApi.followUser(id, token);
      console.log(res.data);
    };

    followUser();
  };
  console.log(allUser);
  return (
    <div className="sidebar-right">
      <div className="saran-group">
        <p className="saran">SARAN</p>
        <img src={user} alt="" height={40} />
      </div>
      <ul>
        {allUser.map((val, index) => {
          return (
            <li className="" key={index}>
              <div className="icon">
                <img src={man4} alt="" width={40} />
              </div>

              <p className="name">{val.username}</p>
              {val.total_user_followers === 0 ? (
                <button
                  className="button"
                  onClick={() => {
                    followHandleClick(val.id);
                  }}
                >
                  <img src={val.follow ? Plus1 : Plus} alt="" width={18} />
                  ikuti
                </button>
              ) : (
                val.user_followers.map((item) => {
                  if (item.user_follower_id === 13) {
                    return (
                      <button
                        className="button"
                        onClick={() => {
                          followHandleClick(val.id);
                        }}
                      >
                        <img
                          src={val.follow ? Plus1 : Plus}
                          alt=""
                          width={18}
                        />
                        mengikuti
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className="button"
                        onClick={() => {
                          followHandleClick(val.id);
                        }}
                      >
                        <img
                          src={val.follow ? Plus1 : Plus}
                          alt=""
                          width={18}
                        />
                        ikuti
                      </button>
                    );
                  }
                })
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
