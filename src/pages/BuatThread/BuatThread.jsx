import React from "react";
import "./BuatThread.scss";

import Navigationbar from "../../components/Navigationbar/Navigationbar";
import FormPostingThread from "../../components/FormPostingThread/FormPostingThread";
import Footer from "../../components/footer/Footer.js";

const BuatThread = () => {
  return (
    <div>
      <Navigationbar />
      <FormPostingThread />
      <Footer />
    </div>
  );
};

export default BuatThread;
