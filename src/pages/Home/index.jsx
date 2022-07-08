import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallMadeIcon from "@mui/icons-material/CallMade";
import HomeCard from "../../components/Card/HomeCard";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar/index";
import Navigationbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import TuneIcon from "@mui/icons-material/Tune";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

import Swal from "sweetalert2";

const Home = () => {
  // const { token } = useSelector((state) => state.login);
  const tokenCookies = Cookies.get("token");
  // console.log(tokenCookies);
  // console.log(token);
  const navigate = useNavigate();
  const fillter = [
    {
      name: "Terbaru",
      icon: AccessTimeIcon,
      link: "/",
      isActive: true,
    },
    {
      name: "Trending",
      icon: CallMadeIcon,
      link: "/trending",
      isActive: false,
    },
    {
      name: "Kategori",
      icon: TuneIcon,
      link: "/explore-topik",
      isActive: false,
    },
  ];

  const [listThread, setListThread] = useState([]);

  const [pageCount, setPageCount] = useState(0);

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
    console.log(res.data);
    setListThread(res.data.content);
    setPageCount(res.data.totalPages);
  };

  useEffect(() => {
    getUser();
    getThread();
  }, []);

  const handlePageClick = (data) => {
    let curentPage = data.selected;
    // console.log(curentPage);
    const getThread = async () => {
      let res = null;
      const params = { curentPage };
      res = await fgdApi.getThread(params);
      console.log(res.data);
      setListThread(res?.data.content);
      console.log(listThread);
    };
    getThread();
  };

  const handleLike = async (id) => {
    let res = null;
    res = await fgdApi.likeThread(id, tokenCookies);
    console.log(res);
  };

  const deleteUserThread = async (id) => {
    let res = null;

    try {
      res = await fgdApi.deleteThread(id, tokenCookies);
      console.log(res);
      getThread();

      Swal.fire({
        title: "Deleted",
        text: "Thread berhasil dihapus",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: error.response.data.data,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Apakah kamu Ingin Mengahapus Trhead ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#26B893",
      cancelButtonColor: "#73777B",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserThread(id);
      } else {
        Swal.fire({
          title: "Canceled",
          text: "Thread batal dihapus",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const followHandleClick = (e, threadUserId) => {
    e.preventDefault();

    const followUser = async () => {
      let res = null;
      res = await fgdApi.followUser(threadUserId, tokenCookies);
      console.log(res.data);
    };

    followUser();
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
            {listThread?.map((item, itemIdx) => (
              <Box key={itemIdx} py="4vh">
                <HomeCard
                  data={item}
                  likeData={item.likes?.map((like, likeIdx) => like)}
                  handleLike={handleLike}
                  handleDelete={handleDelete}
                  commentData={item.comments?.map(
                    (comment, commentIdx) => comment
                  )}
                />
              </Box>
            ))}
            <div>
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
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
