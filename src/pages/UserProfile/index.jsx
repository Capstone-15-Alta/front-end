import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* React Bootstrap */
import { Tabs, Tab } from "react-bootstrap";

import Navigationbar from "../../components/Navbar";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import HomeCard from "../../components/Card/HomeCard";

import fgdApi from "../../api/fgdApi";

import HeaderProfile from "../../components/HeaderProfile";

import "./UserProfile.scss";
import Cookies from "js-cookie";
import HeaderLite from "../../components/HeaderProfile/HeaderLite";

const UserProfile = () => {
  const { id } = useParams();

  // console.log("ini id orang", id);

  const userId = Cookies.get("id");

  const token = Cookies.get("token");

  const profileData = [
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
      title: "Thread",
      number: 20,
      key: "thread",
    },
  ];
  const [userAttribute, setUserAttribute] = useState([]);

  const [selfAccount, setSelfAccount] = useState([]);

  const [listThread, setListThread] = useState([]);

  const [spinner, setSpinner] = useState(false);

  const getUserById = async () => {
    setSpinner(true);
    let res = null;
    res = await fgdApi.getUserById(id, token);

    const data = res.data;
    console.log("ini akun", data);
    setUserAttribute(data);
    setSpinner(false);
  };

  const getSelfAccount = async () => {
    let res = null;
    res = await fgdApi.getUserById(userId, token);

    const data = res.data;
    // console.log(data);
    setSelfAccount(data);
  };

  const getThreadByUserId = async () => {
    let res = null;

    res = await fgdApi.getThreadByUserId(id);
    const data = res?.data.content;
    setListThread(data);
  };

  useEffect(() => {
    getUserById();
    getThreadByUserId();
    getSelfAccount();
  }, []);

  return (
    <>
      {spinner ? (
        <h1>Loading</h1>
      ) : (
        <div className="user-profile-section">
          <Navigationbar />
          <section className="body-section ">
            <div className="row">
              <div className="sidebar-left col-3">
                <SidebarLeft />
              </div>
              <div className="content-section col-9 container-fluid">
                <div className="col-12">
                  <HeaderProfile
                    data={userAttribute}
                    getUserById={getUserById}
                  />
                  <div className=" tab-section row  mb-5">
                    <Tabs
                      defaultActiveKey="thread"
                      id="uncontrolled-tab-example"
                      className="mb-3 data-number justify-content-center"
                    >
                      <Tab
                        eventKey={profileData[0].key}
                        title={
                          <>
                            <p>{profileData[0].title}</p>
                            <p>{userAttribute?.total_user_followers}</p>
                          </>
                        }
                      >
                        <div className="tab-item-wrapper ">
                          <div className="followers-tabs card-tabs ">
                            {userAttribute.user_followers?.map(
                              (item, itemIdx) => (
                                <div
                                  className="row mb-4 justify-content-center"
                                  key={itemIdx}
                                >
                                  <HeaderLite
                                    getUserById={getSelfAccount}
                                    user={selfAccount}
                                    name={item.user_follower?.username}
                                    email={item.user_follower?.email}
                                    gambar={item.user_follower?.image}
                                    guestId={item.user_follower?.id}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        eventKey={profileData[1].key}
                        title={
                          <>
                            {" "}
                            <p>{profileData[1].title}</p>
                            <p>{userAttribute.total_user_following}</p>
                          </>
                        }
                      >
                        <div className="tab-item-wrapper">
                          <div className="following-tabs card-tabs ">
                            {userAttribute.user_following?.map(
                              (item, itemIdx) => (
                                <div
                                  className="row mb-4 justify-content-center"
                                  key={itemIdx}
                                >
                                  <HeaderLite
                                    getUserById={getSelfAccount}
                                    user={selfAccount}
                                    name={item.user_followed?.username}
                                    email={item.user_followed?.email}
                                    gambar={item.user_followed?.image}
                                    guestId={item.user_followed?.id}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </Tab>

                      <Tab
                        eventKey={profileData[2].key}
                        title={
                          <>
                            {" "}
                            <p>{profileData[2].title}</p>
                            <p>{listThread?.length}</p>
                          </>
                        }
                      >
                        <div className="tab-item-wrapper">
                          {" "}
                          <div className="card-threads">
                            {listThread?.reverse().map((item, itemIdx) => (
                              <HomeCard
                                key={itemIdx}
                                data={item}
                                likeData={item.likes}
                              />
                            ))}
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default UserProfile;
