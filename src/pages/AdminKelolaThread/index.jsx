import React, { useState, useEffect } from "react";
import "./AdminKelolaThread.scss";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navbar";
import Cookies from "js-cookie";
import fgdApi from "../../api/fgdApi";
import Pagination from "../../components/Pagination";
import moment from "moment";
import action from "../../assets/icon/thread-action-admin.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminKelolaThread = () => {
  const [allReport, setAllReport] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const navigate = useNavigate();

  const token = Cookies.get("token");
  const userId = Cookies.get("id");
  const getAllReport = async () => {
    let res = null;
    const params = { token: token };
    res = await fgdApi.getAllReport(params);
    // console.log(res.data);
    setAllReport(res.data.content);
    setPageCount(res.data.totalPages);
  };

  useEffect(() => {
    getAllReport();
  }, []);

  const handlePageClick = (data) => {
    let curentPage = data.selected;
    const getAllReport = async () => {
      let res = null;
      const params = { curentPage, token: token };
      res = await fgdApi.getAllReport(params);
      setAllReport(res.data.content);
    };

    getAllReport();
  };
  console.log(allReport);

  useEffect(() => {
    const getRoles = Cookies.get("roles");
    if (getRoles != "ADMIN") {
      navigate("/login");
    }
  }, []);

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
                {allReport.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <div className="profile">
                            <img
                              src={item.user.image}
                              alt=""
                              width={30}
                              height={30}
                              className="image"
                            />
                            <p className="username"> {item.user.username}</p>
                          </div>
                        </td>
                        <td>
                          <div>
                            {moment(item.report_time).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </div>
                        </td>
                        <td>
                          <div>{item.report}</div>
                        </td>
                        <td>
                          <Link to={item && `/thread/${item.thread.id}`}>
                            <img src={action} alt="" width={40} />
                          </Link>
                        </td>
                        <td>
                          <div className="status">status</div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminKelolaThread;
