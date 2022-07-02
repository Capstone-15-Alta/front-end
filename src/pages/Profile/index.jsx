import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* React Bootstrap */
import { Tabs, Tab } from "react-bootstrap";

import Navigationbar from "../../components/Navbar";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import CardPost from "../../components/CardPost";
import HomeCard from "../../components/Card/HomeCard";

import fgdApi from "../../api/fgdApi";

import HeaderProfile from "../../components/HeaderProfile";
import HeaderLite from "../../components/HeaderProfile/HeaderLite";

import "./Profile.scss";
import Cookies from "js-cookie";

const Profile = () => {
  const navigate = useNavigate();
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
      key: "followers",
    },
    {
      title: "Mengikuti",
      number: 5,
      key: "following",
    },
    {
      title: "Post",
      number: 11,
      key: "post",
    },
    {
      title: "Thread",
      number: 20,
      key: "thread",
    },
  ]);
  const [userAttribute, setUserAttribute] = useState({});
  const [listThread, setListThread] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);

  const userId = Cookies.get("id");
  const tokenCookies = Cookies.get("token");
  console.log(userId);

  const handleLike = async (id) => {
    let res = null;
    res = await fgdApi.likeThread(id, tokenCookies);
    console.log(res);
  };

  const getUserById = async (id) => {
    let res = null;
    res = await fgdApi.getUserById(id);

    const data = res.data;
    console.log(data);
    setUserAttribute(data);
    // return res.data;
    console.log(userAttribute);
  };

  useEffect(() => {
    const getThreadByUserId = async (id) => {
      let res = null;

      res = await fgdApi.getThreadByUserId(id);
      //console.log(res.data);
      const data = res?.data;
      setListThread(data);
      console.log(data);
      console.log(listThread);
    };

    getUserById(userId);
    getThreadByUserId(userId);
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
                <HeaderProfile data={userAttribute} getUserById={getUserById} />
                <div className=" tab-section row  mb-5">
                  <Tabs
                    defaultActiveKey="post"
                    id="uncontrolled-tab-example"
                    className="mb-3 data-number justify-content-center"
                  >
                    <Tab
                      eventKey={profileData[0].key}
                      title={
                        <>
                          <p>{profileData[0].title}</p>
                          <p>{userAttribute.total_user_followers}</p>
                        </>
                      }
                    >
                      <div className="tab-item-wrapper ">
                        <div className="followers-tabs card-tabs ">
                          {userAttribute.user_followers?.map(
                            (item, itemIdx) => (
                              <HeaderLite data={item} />
                            )
                          )}
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey={profileData[1].key}
                      title={
                        <>
                          <p>{profileData[1].title}</p>
                          <p>{userAttribute.total_user_following}</p>
                        </>
                      }
                    >
                      <div className="tab-item-wrapper">
                        <div className="following-tabs card-tabs ">
                          {userAttribute.user_following?.map(
                            (item, itemIdx) => (
                              <HeaderLite />
                            )
                          )}
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey={profileData[2].key}
                      title={
                        <>
                          <p>{profileData[2].title}</p>
                          <p>{profileData[2].number}</p>
                        </>
                      }
                    >
                      <div className="tab-item-wrapper">
                        <div className="card-tabs">
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
                    <Tab
                      eventKey={profileData[3].key}
                      title={
                        <>
                          <p>{profileData[3].title}</p>
                          <p>{listThread.length}</p>
                        </>
                      }
                    >
                      <div className="tab-item-wrapper">
                        <div className="threads-tabs card-tabs">
                          {listThread?.map((item, itemIdx) => (
                            <HomeCard
                              key={itemIdx}
                              data={item}
                              likeData={item.likes?.map(
                                (like, likeIdx) => like
                              )}
                              handleLike={handleLike}
                            />
                          ))}
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                  {/* {profileData.map((data, dataIdx) => (
                    <div className="col-md-1 text-center " key={dataIdx}>
                      <p>{data.title}</p>
                      <p>{data.number}</p>
                    </div>
                  ))} */}
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
