import "./Sidebar.scss";
import image from "./icon-sidebar/team-logo.png";
import Plus from "./icon-sidebar/Plus.png";
import user from "./icon-sidebar/user-saran.png";
import ArrowUp from "./icon-sidebar/ArrowUp.png";

import { data } from "./SidebarData";

export const SidebarLeft = () => {
  return (
    <div className="sidebar-left">
      <ul>
        <p className="menu">MENU</p>
        {data.left.map((val, index) => {
          return (
            <li className="d-flex mb-4" key={index}>
              <div className="pe-4">{val.icon}</div>
              <a href={val.link} className="text-decoration-none ">
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
      <ul>
        <div className="d-flex align-items-center">
          <p className="saran">SARAN</p>
          <img src={user} alt="" height={40} />
        </div>

        {data.right.map((val, index) => {
          return (
            <li className="d-flex mb-2  text-wrap" key={index}>
              <div className="me-2">{val.icon}</div>

              <p>{val.name}</p>

              <button>
                {" "}
                <img src={Plus} alt="" width={18} /> Ikuti
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
