import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import CostumeButton from "../Button/CostumeButton";
import Cookies from "js-cookie";
import fgdApi from "../../api/fgdApi";

export default function Comment({ comment }) {
  const [userAttribute, setUserAttribute] = useState({});

  const greyColor = { color: "#9E9E9E" };
  const token = Cookies.get("token");

  const getUserById = async (id) => {
    let res = null;
    res = await fgdApi.getUserById(id, token);
    const data = res.data;
    setUserAttribute(data);
  };

  useEffect(() => {
    getUserById(comment.user.id);
  }, []);

  return (
    <Box borderRadius="20px" py="3vh" px="2vw" ml="40px">
      <Grid container>
        <Grid item>
          <Avatar
            alt={userAttribute.username}
            src={userAttribute.image}
            style={{ width: "30px", height: "30px" }}
          />
        </Grid>
        <Grid item xs pl="1vw">
          <Grid container>
            <Grid item xs>
              <Box display="flex">
                <Box>
                  <div
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "500",
                    }}
                  >
                    {userAttribute.username}
                  </div>
                </Box>
              </Box>
              <div
                style={{
                  marginTop: "1vh",
                  fontSize: "1.25rem",
                  fontWeight: "400",
                }}
              >
                {comment.comment}
              </div>
            </Grid>
            <Grid item style={greyColor}>
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "400",
                  fontStyle: "italic",
                }}
              >
                {" "}
                {comment.created_at.substr(11, 5)}{" "}
              </div>
            </Grid>
          </Grid>
          {/* <Grid container mt="1vh">
            <Grid item xs>
              <CostumeButton> Reply </CostumeButton>
              <CostumeButton> Share </CostumeButton>
              <CostumeButton> Report </CostumeButton>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
}
