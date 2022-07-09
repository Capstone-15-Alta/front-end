import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallMadeIcon from "@mui/icons-material/CallMade";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeCard from "../../components/Card/HomeCard";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar/index";
import Navigationbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

const Home = () => {
  const { token } = useSelector((state) => state.login);
  const tokenCookies = Cookies.get("token");
  // console.log(tokenCookies);
  // console.log(token);
  const fillter = [
    { name: "Terbaru", icon: AccessTimeIcon, link: "/", isActive: false },
    {
      name: "Trending",
      icon: CallMadeIcon,
      link: "/trending",
      isActive: true,
    },
    {
      name: "Kategori",
      icon: FormatListBulletedIcon,
      link: "/explore-topik",
      isActive: false,
    },
  ];

  const [listThread, setListThread] = useState([]);

  const handleLike = async (id) => {
    let res = null;
    res = await fgdApi.likeThread(id, tokenCookies);
    // console.log(res);
  };

  useEffect(() => {
    const getUser = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getAllUser(params);
      // console.log(res.data);
    };

    const getThread = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getThread(params);
      // console.log(res.data);
      setListThread(res?.data);
    };

    getUser();
    getThread();
  }, []);

  const handlePageClick = (data) => {
    let curentPage = data.selected;

    const getThread = async () => {
      let res = null;
      const params = { curentPage };
      res = await fgdApi.getThread(params);
      // console.log(res.data);
      setListThread(res?.data);
    };
    getThread();
  };

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
              <Link key={itemIdx} to={item.link}>
                <Button
                  key={itemIdx}
                  href={item.link}
                  variant={item.isActive === true ? "contained" : "outlined"}
                  sx={{
                    textTransform: "none",
                    borderRadius: "15px",
                    marginRight: "3vw",
                    color: item.isActive ? "white" : "#26B893",
                    bgcolor: item.isActive ? "#26B893" : "white",
                    "&:hover": {
                      color: item.isActive ? "white" : "#26B893",
                      bgcolor: item.isActive ? "#26B893" : "white",
                    },
                  }}
                >
                  <item.icon />
                  <span style={{ marginLeft: "1vw" }}>{item.name}</span>
                </Button>
              </Link>
            ))}
          </Box>
          <Box pt="3vh">
            {listThread.map((item, itemIdx) => (
              <Box key={itemIdx} py="4vh">
                <HomeCard
                  key={itemIdx}
                  data={item}
                  likeData={item.likes?.map((like, likeIdx) => like)}
                  handleLike={handleLike}
                />
              </Box>
            ))}
            <div>
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={listThread.length}
              />
            </div>
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
