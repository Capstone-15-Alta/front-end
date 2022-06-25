import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallMadeIcon from "@mui/icons-material/CallMade";
import HomeCard from "../../components/Card/HomeCard";
import Saran from "../../components/Card/Saran";
import { Avatar } from "@mui/material";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar/index";
import Navigationbar from "../../components/Navbar";

import axios from "axios";
import { useSelector } from "react-redux";

import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

const Home = () => {
  const { token } = useSelector((state) => state.login);
  const tokenCookies = Cookies.get("token");
  console.log(tokenCookies);
  console.log(token);
  const fillter = [
    { name: "Terbaru", icon: AccessTimeIcon, isActive: true },
    { name: "Trending", icon: CallMadeIcon, isActive: false },
    // {name: "Kategori", icon: AccessTimeIcon, isActive: false},
  ];

  const dataHomepage = [
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manProfile.png",
    },
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manProfile.png",
    },
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manProfile.png",
    },
  ];

  const saranData = [
    {
      username: "Charile005",
      isVerified: false,
      profile: "/assets/icon/manProfile.png",
    },
    {
      username: "AlexBrown",
      isVerified: true,
      profile: "/assets/icon/manProfile.png",
    },
    {
      username: "Emma_Wright",
      isVerified: false,
      profile: "/assets/icon/manProfile.png",
    },
  ];

  const [listThread, setListThread] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getAllUser(params);
      console.log(res.data);
    };

    const getThread = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getThread(params);
      //console.log(res.data);
      setListThread(res?.data);
    };

    getUser();
    getThread();
    console.log(listThread);
  }, []);

  return (
    <>
      <Navigationbar />
      <Grid container minHeight="80vh" pt="2vh">
        <Grid item md={3}>
          <SidebarLeft />
        </Grid>
        <Grid item md={6} mt="9rem">
          <Box display="flex">
            {fillter.map((item, itemIdx) => (
              <Button
                key={itemIdx}
                variant={item.isActive === true ? "contained" : "outlined"}
                sx={{
                  textTransform: "none",
                  borderRadius: "15px",
                  marginRight: "3vw",
                  color: item.isActive ? "white" : "#26B893",
                  bgcolor: item.isActive ? "#26B893" : "white",
                }}
              >
                <item.icon />
                <span style={{ marginLeft: "1vw" }}>{item.name}</span>
              </Button>
            ))}
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "15px",
                marginRight: "3vw",
                color: "#26B893",
              }}
            >
              <img src="/assets/icon/vector-kategori.png" />
              <span style={{ marginLeft: "1vw" }}>Kategori</span>
            </Button>
          </Box>
          <Box pt="3vh">
            {listThread.map((item, itemIdx) => (
              <Box key={itemIdx} py="4vh">
                <HomeCard data={item} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={3} pl="2vw" mt="5rem">
          <SidebarRight />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
