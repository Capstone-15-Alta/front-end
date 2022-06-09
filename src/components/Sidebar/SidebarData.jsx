import logo1 from "./icon-sidebar/Vector home.png";
import logo2 from "./icon-sidebar/Vector notifikasi.png";
import logo3 from "./icon-sidebar/Vector explore.png";
import logo4 from "./icon-sidebar/Vector profil.png";

import man1 from "./icon-sidebar/man1.png";
import man2 from "./icon-sidebar/man2.png";
import man3 from "./icon-sidebar/man3.png";
import man4 from "./icon-sidebar/man4.png";

export const data = {
  left: [
    {
      title: "Home Page",
      icon: <img src={logo1} alt="" width={20} />,
      link: "link",
    },
    {
      title: "Notifikasi",
      icon: <img src={logo2} alt="" width={20} />,
      link: "link",
    },
    {
      title: "Explore Topik",
      icon: <img src={logo3} alt="" width={20} />,
      link: "link",
    },
    {
      title: "Profile",
      icon: <img src={logo4} alt="" width={20} />,
      link: "link",
    },
  ],

  right: [
    {
      name: "Charlie005",
      icon: <img src={man1} alt="" width={40} />,
      link: "link",
    },
    {
      name: "AlexBrown",
      icon: <img src={man2} alt="" width={40} />,
      link: "link",
    },
    {
      name: "Emma_Wright",
      icon: <img src={man3} alt="" width={40} />,
      link: "link",
    },
    {
      name: "Ana2007",
      icon: <img src={man4} alt="" width={40} />,
      link: "link",
    },
  ],
};
