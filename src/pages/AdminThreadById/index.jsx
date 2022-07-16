import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import HomeCard from "../../components/Card/HomeCard";
import fgdApi from "../../api/fgdApi";
import Cookies from "js-cookie";

const AdminThreadById = () => {
  const { id } = useParams();
  const [threadById, setThreadById] = useState();

  const navigate = useNavigate();

  const getThreadById = async (id) => {
    let res = null;
    const params = {};
    res = await fgdApi.getThreadById(id);
    const data = res?.data;
    setThreadById(data);
  };
  useEffect(() => {
    getThreadById(id);
  }, []);

  console.log(threadById);

  useEffect(() => {
    const getRoles = Cookies.get("roles");
    if (getRoles != "ADMIN") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navigationbar />

      <div className="row">
        <div className="col-3">
          <SidebarLeft />
        </div>
        <div className="col-9">
          <div className="container">
            <Box py="4vh">
              {threadById && (
                <HomeCard
                  key={threadById.id}
                  data={threadById}
                  likeData={threadById?.likes}
                />
              )}
            </Box>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminThreadById;
