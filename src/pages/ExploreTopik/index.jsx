import React, { useState, useEffect } from "react";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar";
import HomeCard from "../../components/Card/HomeCard";
import "./ExploreTopik.scss";
import Button from "../../components/Button/Button";
import Box from "@mui/material/Box";
import fgdApi from "../../api/fgdApi";
import categoryApi from "../../api/categoryApi";
import Cookies from "js-cookie";

import Swal from "sweetalert2";

function ExploreTopik() {
  const [data, setData] = useState([]);
  const [listThread, setListThread] = useState([]);
  const [category, setCategory] = useState({
    menu: [],
    categoryYangDipilih: "",
  });

  const tokenCookies = Cookies.get("token");

  const getCategory = async () => {
    let res = null;
    const params = {};
    res = await categoryApi.getCategory(params);
    setData(res?.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getThreadFirst = async () => {
    let res = null;
    const params = category.categoryYangDipilih;
    res = await categoryApi.getThread(params);
    // console.log(res.data);
    setListThread(res?.data.content);
  };

  useEffect(() => {
    const getUser = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getUser(params);
      // console.log(res.data);
    };

    console.log(data);

    getUser();
    getThreadFirst();
    // console.log(listThread);
  }, []);

  const handleCategory = (value) => {
    setCategory({
      menu: [],
      categoryYangDipilih: value,
    });

    const getThread = async () => {
      let res = null;
      const params = {};
      res = await categoryApi.getThread(value);
      console.log(res.data);
      setListThread(res?.data.content);
    };
    getThread();
    //
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
      getThreadFirst();
      getCategory();

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

  return (
    <>
      <Navigationbar />
      <div className="row">
        <div className="col-3">
          <SidebarLeft />
        </div>
        <div className="col-6">
          <div className="explore">
            <div className="explore-button">
              {data &&
                data.map((val, index) => {
                  return (
                    <button
                      className={
                        val.category_name === category.categoryYangDipilih
                          ? "button-active"
                          : "button"
                      }
                      onClick={() => {
                        handleCategory(val.category_name);
                      }}
                    >
                      {val.category_name}
                    </button>
                  );
                })}
            </div>
            <div className="explore-thread">
              {listThread &&
                listThread.map((item, itemIdx) => (
                  <Box key={itemIdx} py="4vh">
                    <HomeCard
                      key={itemIdx}
                      data={item}
                      likeData={item.likes?.map((like, likeIdx) => like)}
                      handleLike={handleLike}
                      handleDelete={handleDelete}
                    />
                  </Box>
                ))}
            </div>
          </div>
        </div>
        <div className="col-3">
          <SidebarRight />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreTopik;
