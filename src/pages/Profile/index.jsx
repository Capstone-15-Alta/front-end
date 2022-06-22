import axios from "axios";
import React, { useState, useEffect } from "react";

/* React Bootstrap */
import { Tabs, Tab } from "react-bootstrap";

import Navigationbar from "../../components/Navbar";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/footer";
import CardPost from "../../components/CardPost";
import HomeCard from "../../components/card/HomeCard";

import fgdApi from "../../api/fgdApi";

import HeaderProfile from "../../components/headerProfile";

import "./Profile.scss";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";

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

  const [listThread, setListThread] = useState([]);

  useEffect(() => {
    const getThread = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getThread(params);
      //console.log(res.data);
      setListThread(res?.data);
    };

    getThread();
    console.log(listThread);
  }, []);

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
                          <div className="card-threads">
                            <CardPost
                              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                              name="Gde Agung Mandala"
                              dateTime="31-05-2022 19:56"
                              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam
                              ratione dolorum temporibus vero tenetur sapiente quam similique iste
                              dolorem unde accusamus eligendi a animi, ipsa harum, impedit
                              recusandae assumenda. Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ad sint eligendi doloremque magnam similique, quam
                              mollitia molestias obcaecati libero minima quibusdam atque ex ea velit
                              iusto placeat molestiae facere unde?"
                            />
                            <CardPost
                              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                              name="Gde Agung Mandala"
                              dateTime="31-05-2022 19:56"
                              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam
                              ratione dolorum temporibus vero tenetur sapiente quam similique iste
                              dolorem unde accusamus eligendi a animi, ipsa harum, impedit
                              recusandae assumenda. Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ad sint eligendi doloremque magnam similique, quam
                              mollitia molestias obcaecati libero minima quibusdam atque ex ea velit
                              iusto placeat molestiae facere unde?"
                            />
                            <CardPost
                              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                              name="Gde Agung Mandala"
                              dateTime="31-05-2022 19:56"
                              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam
                              ratione dolorum temporibus vero tenetur sapiente quam similique iste
                              dolorem unde accusamus eligendi a animi, ipsa harum, impedit
                              recusandae assumenda. Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ad sint eligendi doloremque magnam similique, quam
                              mollitia molestias obcaecati libero minima quibusdam atque ex ea velit
                              iusto placeat molestiae facere unde?"
                            />
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="thread" title="Thread">
                        <div className="tab-item-wrapper">
                          {listThread.map((item, itemIdx) => (
                            <div key={itemIdx} className="card-threads">
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
