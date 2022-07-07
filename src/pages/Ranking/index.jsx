import React, { useState, useEffect } from "react";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SidebarLeft, SidebarRight } from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import gold from "../../assets/icon/ranking-gold.png";
import man from "../../assets/icon/manProfile.png";
import love from "../../assets/icon/love.png";
import hair from "../../assets/icon/hair.png";
import "./Ranking.scss";
const Ranking = () => {
  const dataFake = [
    {
      username: "alberto",
      image: man,
      user_followers: 200,
      user_following: 50,
      total_like: 1000,
      total_thread: 5000,
    },
    {
      username: "alvonso",
      image: man,
      user_followers: 200,
      user_following: 500,
      total_like: 4000,
      total_thread: 5000,
    },
    {
      username: "alvonso",
      image: man,
      user_followers: 200,
      user_following: 500,
      total_like: 4000,
      total_thread: 5000,
    },
  ];

  function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["k", "m", "b", "t"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);

      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces;

        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }

        // Add the letter for the abbreviation
        number += abbrev[i];

        // We are done... stop
        break;
      }
    }

    return number;
  }
  return (
    <>
      <Navigationbar />
      <div className="row">
        <div className="col-3">
          <SidebarLeft />
        </div>
        <div className="col-9">
          <div className="content">
            <h3>
              Ranking User{" "}
              <i>
                <img src={gold} alt="" width={30} />
              </i>
            </h3>
            <div className="ranking">
              {dataFake.map((item, index) => {
                return (
                  <div className="ranking-item">
                    <div className="index">{index + 1}</div>
                    <img src={item.image} alt="" width={40} className="image" />
                    <p className="username">{item.username}</p>
                    <div className="follow">{item.user_followers} Pengikut</div>
                    <div className="follow">
                      {item.user_following} Mengikuti
                    </div>
                    <div className="total_like">
                      <i>
                        <img src={love} alt="" width={20} />
                      </i>{" "}
                      {abbrNum(item.total_like, 0)}
                    </div>
                    <div className="total_thread">
                      <i>
                        <img src={hair} alt="" width={20} />
                      </i>
                      {abbrNum(item.total_thread, 0)}
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ranking;
