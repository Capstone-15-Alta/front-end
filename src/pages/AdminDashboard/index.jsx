import React from 'react'
import './AdminDashboard.scss'
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navbar";
import Table from "../../components/Table";
import fgdApi from "../../api/fgdApi";
import Pagination from "../../components/Pagination";

const AdminDashboard = () => {
  return (
    <>
      <Navigationbar />

      <div class="row">
        <div class="col-3">
          <SidebarLeft />
        </div>
        <div class="col-9">
          
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AdminDashboard