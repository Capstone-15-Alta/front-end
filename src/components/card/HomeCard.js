import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comment from "./Comment";
import TextField from "@mui/material/TextField";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function HomeCard({ data }) {
  const [openComment, setOpenComment] = useState(false);

  const dataComment = [
    {
      username: "Albert Flores",
      isVerified: true,
      content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
      timePost: "12 hours ago",
      profile: "/assets/icon/manprofil.png",
      children: [
        {
          username: "Flores",
          isVerified: false,
          content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
          timePost: "12 hours ago",
          profile: "/assets/icon/manprofil.png",
        },
        {
          username: "Albert",
          isVerified: true,
          content: "Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?",
          timePost: "12 hours ago",
          profile: "/assets/icon/manprofil.png",
        },
      ],
    },
  ];
  return (
    <>
      <Box borderRadius="20px" py="1vh" px="2vw" boxShadow={1}>
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
                    <Box mt="-1vw">
                      <Typography variant="caption">{data.email}</Typography>
                    </Box>
                  </Box>
                  {data.isVerified && (
                    <img src="assets/icon/verified.png" height="20vh" />
                  )}
                </Box>
                <h4 style={{ marginTop: "3vh" }}>{data.content}</h4>
                <Typography variant="caption">{data.timePost}</Typography>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    backgroundColor: "#26B893",
                    padding: "0.2vw 2vw 0.2vw 2vw",
                  }}
                >
                  + Ikuti
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Stack spacing={2} direction="row">
                  <IconButton aria-label="like">
                    <ThumbUpOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="dislike">
                    <ThumbDownAltOutlinedIcon />
                  </IconButton>
                  <IconButton
                    aria-label="comment"
                    onClick={() => setOpenComment(!openComment)}
                  >
                    <ChatBubbleOutlineOutlinedIcon />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                  <IconButton aria-label="view">
                    <VisibilityOutlinedIcon />
                    <Typography variant="caption" sx={{ ml: "1vw" }}>
                      {data.view}
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="reply">
                    <ReplyOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareOutlinedIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {openComment && (
        <>
          {dataComment.map((data) => (
            <>
              <Comment data={data} />
              {data.children.map((data) => (
                <Box ml="2vw">
                  <Comment data={data} />
                </Box>
              ))}
            </>
          ))}
          <Box display="flex" px="2vw">
            <Avatar alt={data.username} src={data.profile} />
            <TextField
              fullWidth
              label=" "
              variant="filled"
              sx={{ ml: "1vw" }}
            />
            <IconButton size="large" sx={{ ml: "1vw" }}>
              <ArrowCircleRightIcon
                fontSize="large"
                style={{ color: "#4E9BB9" }}
              />
            </IconButton>
          </Box>
        </>
      )}
    </>
  );
}
