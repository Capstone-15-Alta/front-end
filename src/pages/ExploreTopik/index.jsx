import React, { useState, useEffect } from "react";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar";
import HomeCard from "../../components/card/HomeCard";
import "./ExploreTopik.scss";
import Button from "../../components/Button/Button";
import Box from "@mui/material/Box";
import fgdApi from "../../api/fgdApi";
import categoryApi from "../../api/categoryApi";

function ExploreTopik() {
  const [data, setData] = useState([]);
  const [listThread, setListThread] = useState([]);
  const [category, setCategory] = useState({
    menu: [],
    categoryYangDipilih: "",
  });

  useEffect(() => {
    const getCategory = async () => {
      let res = null;
      const params = {};
      res = await categoryApi.getCategory(params);
      setData(res?.data);
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getUser(params);
      console.log(res.data);
    };

    const getThread = async () => {
      let res = null;
      const params = category.categoryYangDipilih;
      res = await categoryApi.getThread(params);
      console.log(res.data);
      setListThread(res?.data);
    };

    console.log(data);

    getUser();
    getThread();
    console.log(listThread);
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
      setListThread(res?.data);
    };
    getThread();
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
                    <HomeCard data={item} />
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
