import React from "react";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navigationbar from "../../components/Navigationbar/Navigationbar";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar/Sidebar";
import Button from "../../components/button/Button";

import HeaderProfile from "../../components/headerProfile/Index";

import "./Index.scss";

/* Images */
import banner from "../../images/capung.png";
import foto from "../../images/foto.jpg";

const Profile = () => {
  const [profileData, setProfileData] = useState([
    {
      title: "Pengikut",
      number: 5,
    },
    {
      title: "Mengikuti",
      number: 5,
    },
    {
      title: "Post",
      number: 11,
    },
    {
      title: "Thread",
      number: 20,
    },
  ]);

  return (
    <>
      <div className="profile-section">
        <Navigationbar />
        <section className="body-section ">
          <div className="row">
            <div className="sidebar-left col-3">
              <SidebarLeft />
            </div>
            <div className="content-section col-9 container-fluid">
              <div className="col-12">
                <HeaderProfile />
                <div className="data-number row justify-content-center">
                  {profileData.map((data, dataIdx) => (
                    <div className="col-md-1 text-center " key={dataIdx}>
                      <p>{data.title}</p>
                      <p>{data.number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
