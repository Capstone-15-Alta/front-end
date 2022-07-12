import React,{useState,useEffect} from 'react'
import Box from "@mui/material/Box";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navbar";
import { useParams } from 'react-router-dom';
import HomeCard from '../../components/Card/HomeCard';
import fgdApi from "../../api/fgdApi";
const AdminThreadById = () => {
    const [threadById , setThreadById] = useState([]);
    const {id} =useParams()

  
    const getThreadById = async () => {
        let res = null;
        const params = {};
        res = await fgdApi.getThreadById(id,params);
        // console.log(res.data);
        setThreadById(res.data);
        
      };
    
      useEffect(() => {
        getThreadById();
      }, []);

      console.log(threadById)

  return (
    <>
      <Navigationbar />

      <div class="row">
        <div class="col-3">
          <SidebarLeft />
        </div>
        <div class="col-9">
         
            <div className="container">
             {id}
            {/* <Box  py="4vh">
                <HomeCard
                  key={threadById.id}
                  data={threadById}
                  likeData={threadById.likes}
                //   getThread={getThread}
                  commentData={threadById.comments?.map(
                    (comment, commentIdx) => comment
                  )}
                  
                />
              </Box> */}
            </div>
          
          
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AdminThreadById