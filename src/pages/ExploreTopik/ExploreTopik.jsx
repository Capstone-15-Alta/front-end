import React ,{useState,useEffect}from "react";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar";
import HomeCard from "../../components/card/HomeCard";
import "./ExploreTopik.scss";
import Button from "../../components/Button/Button";
function ExploreTopik() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6291e6b7cd0c91932b69e924.mockapi.io/api/category", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data);

  const [category , setCategory] = useState(
    {
      menu:[],
      categoryYangDipilih: ''
    }
  )

  const handleCategory =(value)=>{
    setCategory({ 
      menu:[],
      categoryYangDipilih: value})


      //handle kategori yang akan ditampilkan


  }

  console.log(category)


  const dataHomepage = [
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manprofil.png",
    },
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manprofil.png",
    },
    {
      username: "Albert Flores",
      email: "Albert Flores@gmail.com",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "03:00 pm",
      view: "120",
      profile: "/assets/icon/manprofil.png",
    },
  ];
  return (
    <>
      <Navigationbar />
      <div className="row">
        <div className="col-3">
          <SidebarLeft />
        </div>
        <div className="col-6">
          <div className="explore">
            <div className="explore-button">
              {data &&
                data.map((val, index) => {
                  return <Button title={val.category_name} onClick={() =>{handleCategory(val.category_name)}} />;
                })}
            </div>
            <div className="explore-thread">
            {dataHomepage.map((item) => (
           
                <HomeCard data={item} />
              
            ))}
            </div>
          </div>
        </div>
        <div className="col-3">
          <SidebarRight />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreTopik;
