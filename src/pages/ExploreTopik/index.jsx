import React, { useState, useEffect } from "react";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar";
import HomeCard from "../../components/Card/HomeCard";
import "./ExploreTopik.scss";
import Box from "@mui/material/Box";
import categoryApi from "../../api/categoryApi";

function ExploreTopik() {
  const [data, setData] = useState([]);
  const [listThread, setListThread] = useState([]);
  const [category, setCategory] = useState({
    menu: [],
    categoryYangDipilih: "",
  });

  const getCategory = async () => {
    let res = null;
    const params = {};
    res = await categoryApi.getCategory(params);
    setData(res?.data);
  };

  const getThreadFirst = async () => {
    let res = null;
    const params = category.categoryYangDipilih;
    res = await categoryApi.getThread(params);
    setListThread(res?.data.content);
  };

  useEffect(() => {
    getCategory();
    getThreadFirst();
  }, []);

  const handleCategory = (value) => {
    setCategory({
      menu: [],
      categoryYangDipilih: value,
    });

    const getThread = async () => {
      let res = null;
      res = await categoryApi.getThread(value);
      setListThread(res?.data.content);
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
                      key={index}
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
                      likeData={item.likes}
                      getThread={getThreadFirst}
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
