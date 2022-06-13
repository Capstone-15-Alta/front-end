import logo1 from "../../images/icon-sidebar/Vector home.png";
import logo2 from "../../images/icon-sidebar/Vector notifikasi.png";
import logo3 from "../../images/icon-sidebar/Vector explore.png";
import logo4 from "../../images/icon-sidebar/Vector profil.png";

import man1 from "../../images/icon-sidebar/man1.png";
import man2 from "../../images/icon-sidebar/man2.png";
import man3 from "../../images/icon-sidebar/man3.png";
import man4 from "../../images/icon-sidebar/man4.png";

import hover1 from "../../images/icon-sidebar/Vector (4).png";
import hover2 from "../../images/icon-sidebar/Vector (5).png";
import hover3 from "../../images/icon-sidebar/Vector (6).png";
import hover4 from "../../images/icon-sidebar/Vector (7).png";
export const data = {
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
      link: "/buat-thread",
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
      link: "/buat-thread",
    },
  ],

  right: [
    {
      name: "Charlie005",
      icon: <img src={man1} alt="" width={40} />,
      follow:true,
      link: "/link",
    },
    {
      name: "AlexBrown",
      icon: <img src={man2} alt="" width={40} />,
      follow:false,
      link: "/link",
    },
    {
      name: "Emma_Wright",
      icon: <img src={man3} alt="" width={40} />,
      follow:false,
      link: "/link",
    },
    {
      name: "Ana2007",
      icon: <img src={man4} alt="" width={40} />,
      follow:true,
      link: "/link",
    },
  ],
};
