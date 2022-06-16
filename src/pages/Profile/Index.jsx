import React, { useState } from "react";

/* React Bootstrap */
import { Tabs, Tab } from "react-bootstrap";

import Navigationbar from "../../components/Navbar";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import HomeCard from "../../components/Card/HomeCard";

import HeaderProfile from "../../components/HeaderProfile";

import "./Profile.scss";

const Profile = () => {
  const dataHomepage = [
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manprofil.png",
    },
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manprofil.png",
    },
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manprofil.png",
    },
  ];
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
                <div className="data-number row justify-content-center mb-5">
                  {profileData.map((data, dataIdx) => (
                    <div className="col-md-1 text-center " key={dataIdx}>
                      <p>{data.title}</p>
                      <p>{data.number}</p>
                    </div>
                  ))}
                </div>
                <section className="tab-section">
                  <div className="col-12">
                    <Tabs
                      defaultActiveKey="post"
                      id="uncontrolled-tab-example"
                      className="mb-3 tes"
                    >
                      <Tab eventKey="post" title="Post" className="ini-tes">
                        <div className="tab-item-wrapper">
                          <h4>Name : Post</h4>
                          <h5>Profession : FrontEnd Developer</h5>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Maxime libero vitae quia unde ex ducimus qui
                            reiciendis dolore, cumque possimus.
                          </p>
                        </div>
                      </Tab>
                      <Tab eventKey="thread" title="Thread">
                        <div className="tab-item-wrapper">
                          {/* <h4>Name : Thread</h4>
                          <h5>Profession : FrontEnd Developer</h5>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Maxime libero vitae quia unde ex ducimus qui
                            reiciendis dolore, cumque possimus.
                          </p> */}{" "}
                          {dataHomepage.map((item) => (
                            <div className="card">
                              <HomeCard data={item} />
                            </div>
                          ))}
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </section>
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
