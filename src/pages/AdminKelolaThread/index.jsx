import React from "react";
import "./AdminKelolaThread.scss";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navbar";

import fgdApi from "../../api/fgdApi";
import Pagination from "../../components/Pagination";
const AdminKelolaThread = () => {
  return (
    <>
      <Navigationbar />

      <div class="row">
        <div class="col-3">
          <SidebarLeft />
        </div>
        <div class="col-9">
          <div className="container">
          <h3>Thread</h3>
            <table class="table">
              <thead class="table-light">
                <tr>
                  <th scope="col">Nama</th>
                  <th scope="col">Waktu</th>
                  <th scope="col">Report</th>
                  <th scope="col">Action</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tbody>
            </table>
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminKelolaThread;
