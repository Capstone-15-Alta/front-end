import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CostumeButton from "../Button/CostumeButton";

export default function Comment({ data }) {
  const greyColor = { color: "#9E9E9E" };
  return (
    <Box borderRadius="20px" py="3vh" px="2vw">
      <Grid container>
        <Grid item>
          <Avatar alt={data.username} src={data.profile} />
        </Grid>
        <Grid item xs pl="1vw">
          <Grid container>
            <Grid item xs>
              <Box display="flex">
                <Box>
                  <h5>{data.username}</h5>
                </Box>
                {data.isVerified && (
                  <img src="assets/icon/verified.png" height="20vh" />
                )}
              </Box>
              <h5 style={{ marginTop: "3vh", color: "#9E9E9E" }}>
                {data.content}
              </h5>
            </Grid>
            <Grid item style={greyColor}>
              <h8> {data.timePost} </h8>
            </Grid>
          </Grid>
          <Grid container mt="2vh">
            <Grid item xs>
              <CostumeButton> Reply </CostumeButton>
              <CostumeButton> Share </CostumeButton>
              <CostumeButton> Report </CostumeButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
