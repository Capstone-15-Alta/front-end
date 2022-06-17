import React from "react";
import "./BuatThread.scss";

import Navigationbar from "../../components/Navbar";
import { SidebarLeft, SidebarRight } from "../../components/Navbar/Sidebar";
import FormPostingThread from "../../components/FormPostingThread";
import Footer from "../../components/footer/";

const BuatThread = () => {
  return (
    <div>
      <Navigationbar />
      <div className="row">
        <div className="col">
          <SidebarLeft />
        </div>
        <div className="col">
          <FormPostingThread />
        </div>
        <div className="col">
          <SidebarRight />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuatThread;
