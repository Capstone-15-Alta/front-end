import React from "react";
import logo from "../../images/logoFooter.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="section-footer mt-5 ">
        <div class="container pt-5 pb-5">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-lg-6 m-auto">
                  <div className="d-flex">
                    <a className="logo me-3" href="#">
                      <img src={logo} alt="logo" />
                    </a>{" "}
                    <div className="copy mt-3">
                      Copyright UI/UX Designer 2022 || Muhammad Yogi
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-5 konten m-auto">
                  <div className="d-flex">
                    <Link className="me-3 col-lg-2" to="/#">
                      Home
                    </Link>
                    <Link className="me-3 col-lg-2" to="/#">
                      Trending
                    </Link>
                    <Link className="me-3 col-lg-2" to="/#">
                      Notifikasi
                    </Link>
                    <Link className="me-3 col-lg-3" to="/#">
                      Explore Topik
                    </Link>
                    <Link className="me-3 col-lg-2" to="/#">
                      Terbaru
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
