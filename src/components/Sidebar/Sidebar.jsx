import "./Sidebar.scss";
import image from "../../images/icon-sidebar/team-logo.png";
import Plus from "../../images/icon-sidebar/Plus.png";
import Plus1 from "../../images/icon-sidebar/Plus (1).png";
import user from "../../images/icon-sidebar/user-saran.png";
import ArrowUp from "../../images/icon-sidebar/ArrowUp.png";

import { data } from "./SidebarData";

export const SidebarLeft = () => {
  const handleStyle = (link) => {
    window.location.pathname = link;
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
                handleStyle(val.link);
              }}
              className={
                window.location.pathname === val.link ? "li-active" : null
              }
            >
              <div className="icon">
                {window.location.pathname === val.link ? val.icon2 : val.icon}
              </div>

              <div className="text">{val.title}</div>
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


              <button className={val.follow ? "button-mengikuti" : "button"} >
                <img src={val.follow ? Plus1:Plus} alt="" width={18} />{val.follow ? "Mengikuti" : "Ikuti"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};