import { Avatar, Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import React from "react";

export default function Saran({ data }) {
  return (
    <Grid container my="1vh">
      <Grid item>
        <Avatar alt={data.username} src={data.profile}></Avatar>
      </Grid>
      <Grid item justifyContent="center" pl="1vw">
        <h5>{data.username} </h5>
      </Grid>
      <Grid item xs>
        {data.isVerified && (
          <img src="assets/icon/verified.png" height="20vh" />
        )}
      </Grid>
      <Grid item>
        <Button style={{ backgroundColor: "#26B893" }}>+ Ikuti</Button>
      </Grid>
    </Grid>
  );
}
