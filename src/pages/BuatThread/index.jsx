import React, { useState, useEffect } from "react";
import "./BuatThread.scss";

import Navigationbar from "../../components/Navbar";
import { SidebarLeft } from "../../components/Sidebar";
import FormPostingThread from "../../components/FormPostingThread";
import Footer from "../../components/Footer";

import { useSelector } from "react-redux";

import fgdApi from "../../api/fgdApi";

const BuatThread = () => {
  const { token } = useSelector((state) => state.login);

  console.log(token);

  return (
    <div>
      <Navigationbar />
      <div className="row">
        <div className="col-lg-3">
          <SidebarLeft />
        </div>
        <div className="col-lg-7">
          <FormPostingThread />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuatThread;
