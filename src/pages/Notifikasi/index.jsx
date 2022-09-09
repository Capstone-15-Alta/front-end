import React, { useState, useEffect } from "react";
import "./Notifikasi.scss";
import Navigationbar from "../../components/Navbar";
import { SidebarLeft } from "../../components/Sidebar";
import Notification from "../../components/Notification";
import Footer from "../../components/Footer";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

const Notifikasi = () => {
  const token = Cookies.get("token");

  const listNotifType = [
    {
      title: "Semua",
      class: "semua",
    },
    {
      title: "Belum Dibaca",
      class: "belum-dibaca",
    },
    {
      title: "Baca Semuanya",
      class: "baca-semua",
    },
    {
      title: "Hapus Semuanya",
      class: "hapus-semua",
    },
  ];

  const [category, setCategory] = useState({
    categoryYangDipilih: "",
  });

  const [listNotif, setListNotif] = useState([]);

  const handleCategory = (value) => {
    setCategory({
      categoryYangDipilih: value,
    });
  };

  const getNotification = async () => {
    let res = null;
    res = await fgdApi.getNotification(token);
    console.log("ini notif", res.data.content);
    setListNotif(res.data.content);
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <div className="notification-section">
      <Navigationbar />
      <section className="body-section ">
        <div className="row">
          <div className="sidebar-left col-3">
            <SidebarLeft />
          </div>
          <div className="content-section col-9 container-fluid">
            <div className="col-10">
              {/* {listNotifType &&
                listNotifType.map((val, index) => {
                  return (
                    <button
                      key={index}
                      style={{ marginBottom: "2rem" }}
                      className={
                        val.class === category.categoryYangDipilih
                          ? "button-active"
                          : "button"
                      }
                      onClick={() => {
                        handleCategory(val.class);
                      }}
                    >
                      {val.title}
                    </button>
                  );
                })} */}
              {listNotif.map((item, itemIdx) => (
                <Notification data={item} key={itemIdx} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Notifikasi;
