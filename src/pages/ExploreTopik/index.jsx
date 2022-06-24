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

function ExploreTopik() {
  const [data, setData] = useState([]);
  const [listThread, setListThread] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      let res = null;
      const params = {};
      res = await fgdApi.getUser(params);
      console.log(res.data);
    };

    const getThreadCategory = async () => {
      let res = null;
      const params = {};
      res = await categoryApi.getThreadCategory(params);
      console.log(res.data);
      setListThread(res?.data);
    };

    getUser();
    getThreadCategory();
    console.log(listThread);
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      let res = null;
      const params = {};
      res = await categoryApi.getCategory(params);
      setData(res?.data);
    };

    getCategory();
    console.log(data);
  }, []);

  const [category, setCategory] = useState({
    menu: [],
    categoryYangDipilih: "",
  });

  const handleCategory = (value) => {
    setCategory({
      menu: [],
      categoryYangDipilih: value,
    });

    //handle kategori yang akan ditampilkan
  };

  console.log(category);

 
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
                    <Button
                      title={val.category_name}
                      className="button"
                      onClick={() => {
                        handleCategory(val.category_name);
                      }}
                    />
                  );
                })}
            </div>
            <div className="explore-thread">
              {listThread.map((item, itemIdx) => (
                <div>{item.title}</div>
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
