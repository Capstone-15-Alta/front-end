import { useEffect, useState } from "react";
import "./Sidebar.scss";
import image from "./icon-sidebar/team-logo.png";
import Plus from "./icon-sidebar/Plus.png";
import user from "./icon-sidebar/user-saran.png";
import ArrowUp from "./icon-sidebar/ArrowUp.png";

import { data } from "./SidebarData";

export const SidebarLeft = () => {
  const [localStyle, setLocalStyle] = useState(null);

  useEffect(() => {
    const test = sessionStorage.getItem("test");
    test && setLocalStyle(parseInt(test));
  }, []);

  const handleStyle = (index) => {
    sessionStorage.setItem("test", index);
  };

  return (
    <div className="sidebar-left">
      <ul>
        <p className="menu">MENU</p>
        {data.left.map((val, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleStyle(index);
              }}
              className={localStyle === index ? "li-active" : null}
            >
              <div className="icon">
                {localStyle === index ? val.icon2 : val.icon}
              </div>
              <a href={val.link} className="">
                <p>{val.title}</p>
              </a>
            </li>
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
  return (
    <div className="sidebar-right">
      <div className="saran-group">
        <p className="saran">SARAN</p>
        <img src={user} alt="" height={40} />
      </div>
      <ul>
        {data.right.map((val, index) => {
          return (
            <li className="" key={index}>
              <div className="icon">{val.icon}</div>

              <p className="name">{val.name}</p>

              <button className="button">
                <img src={Plus} alt="" width={18} /> Ikuti
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
