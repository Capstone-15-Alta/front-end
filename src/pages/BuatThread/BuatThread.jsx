import React from "react";
import "./BuatThread.scss";

import Navigationbar from "../../components/Navigationbar/Navigationbar";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar/Sidebar";
import FormPostingThread from "../../components/FormPostingThread/FormPostingThread";
import Footer from "../../components/footer/Footer";

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
