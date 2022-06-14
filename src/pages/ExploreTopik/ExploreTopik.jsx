import React from "react";
import Navigationbar from "../../components/Navigationbar/Navigationbar";
import Footer from "../../components/footer/Footer";
import { SidebarLeft,SidebarRight } from "../../components/Sidebar/Sidebar";
function ExploreTopik() {
  return (
    <>
      <Navigationbar />
      <div className="row">
        <div className="col-3"><SidebarLeft/></div>
        <div className="col-6">Column</div>
        <div className="col-3"><SidebarRight/></div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreTopik;