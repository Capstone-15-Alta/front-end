import { useState, useEffect } from "react";
import "./AdminDashboard.scss";
import { SidebarLeft } from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  ArcElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  ArcElement
);
const AdminDashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "yellow",
        borderColor: "green",
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "second Dataset",
        data: [20, 40, 30, 42, 51, 86, 100, 59, 40, 73, 80, 58],
        borderColor: "blue",
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  const [data2, setData2] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });

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
            <div>
              <Line data={data} />
            </div>
            <div className="chart2">
              <Doughnut data={data2} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
