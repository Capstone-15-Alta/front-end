import logo1 from "../../assets/icon-sidebar/Vector home.png";
import logo2 from "../../assets/icon-sidebar/Vector notifikasi.png";
import logo3 from "../../assets/icon-sidebar/Vector explore.png";
import logo4 from "../../assets/icon-sidebar/Vector profil.png";
import logo5 from "../../assets/icon-sidebar/ranking-3.png";


import man1 from "../../assets/icon-sidebar/man1.png";
import man2 from "../../assets/icon-sidebar/man2.png";
import man3 from "../../assets/icon-sidebar/man3.png";
import man4 from "../../assets/icon-sidebar/man4.png";

import hover1 from "../../assets/icon-sidebar/Vector (4).png";
import hover2 from "../../assets/icon-sidebar/Vector (5).png";
import hover3 from "../../assets/icon-sidebar/Vector (6).png";
import hover4 from "../../assets/icon-sidebar/Vector (7).png";
import hover5 from "../../assets/icon-sidebar/ranking.png";

import dashboard from  "../../assets/icon-sidebar/dashboard.png"
import dashboard2 from  "../../assets/icon-sidebar/dashboard-active.png"
import kelola from  "../../assets/icon-sidebar/kelola.png"
import kelola2 from  "../../assets/icon-sidebar/kelola-active.png"

import user from  "../../assets/icon-sidebar/user.png"
import user2 from  "../../assets/icon-sidebar/user-active.png"

export let data = {
  left: [
    {
      title: "Home Page",
      icon: <img src={logo1} alt="" width={20} />,
      icon2: <img src={hover1} alt="" width={20} />,
      link: "/",
    },
    {
      title: "Notifikasi",
      icon: <img src={logo2} alt="" width={20} />,
      icon2: <img src={hover3} alt="" width={20} />,
      link: "/notifikasi",
    },
    {
      title: "Ranking",
      icon: <img src={logo5} alt="" width={20} />,
      icon2: <img src={hover5} alt="" width={20} />,
      link: "/ranking",
    },
    {
      title: "Explore Topik",
      icon: <img src={logo3} alt="" width={20} />,
      icon2: <img src={hover4} alt="" width={20} />,
      link: "/explore-topik",
    },
    {
      title: "Profile",
      icon: <img src={logo4} alt="" width={20} />,
      icon2: <img src={hover2} alt="" width={20} />,
      link: "/profile",
    },
  ],

  right: [
    {
      name: "Charlie005",
      icon: <img src={man1} alt="" width={40} />,
      follow: true,
      link: "/link",
    },
    {
      name: "AlexBrown",
      icon: <img src={man2} alt="" width={40} />,
      follow: false,
      link: "/link",
    },
    {
      name: "Emma_Wright",
      icon: <img src={man3} alt="" width={40} />,
      follow: false,
      link: "/link",
    },
    {
      name: "Ana2007",
      icon: <img src={man4} alt="" width={40} />,
      follow: true,
      link: "/link",
    },
  ],

  admin : [
    {
      title: "Dashboard",
      icon: <img src={dashboard} alt="" width={20} />,
      icon2: <img src={dashboard2} alt="" width={20} />,
      link: "/admin-dashboard",
    },
    {
      title: "Kelola Thread",
      icon: <img src={kelola} alt="" width={20} />,
      icon2: <img src={kelola2} alt="" width={20} />,
      link: "/admin-kelolathread",
    },
    {
      title: "User",
      icon: <img src={user} alt="" width={20} />,
      icon2: <img src={user2} alt="" width={20} />,
      link: "/admin-user",
    },
    {
      title: "Admin",
      icon: <img src={logo4} alt="" width={20} />,
      icon2: <img src={hover2} alt="" width={20} />,
      link: "/profile",
    },
  ]
};
