import React from "react";
import { SidebarLeft, SidebarRight } from "../components/Sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar"
const Home = () => {
  return (
    <>  <Navbar/>
      <div className="">
        <div className="row">
          <div className="col-3"><SidebarLeft/></div>
          <div className="col-6  ">Column</div>
          <div className="col-3"><SidebarRight/></div>
        </div>
      </div>
    </>
  );
};

export default Home;
