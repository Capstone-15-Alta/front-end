import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Footer() {
    const buttons = [
        {name:"Homepage", link:"/"},
        {name:"Trending", link:"/trending"},
        {name:"Notifikasi", link:"/notifikasi"},
        {name:"Explore Topik", link:"/explore-topik"},
        {name:"Terbaru", link:"/terbaru"},
    ]
    return (
    <Box boxShadow={3} backgroundColor="#26B893">
        <Container>
            <Grid container alignItems="center" height="125px" >
                <Grid item sm={1}>
                    <img alt="logo" src="/assets/logo/Group3.png" />
                </Grid>
                <Grid item>
                    <Typography sx={{fontFamily: "Poppins", color:"white", fontWeight: "700"}}>Forum Group Diskusi</Typography>
                </Grid>
                <Grid item ml="5vw" xs>
                    <Typography sx={{fontFamily: "Poppins", color:"white"}}>Copyright UI/UX Designer 2022  || Muhammad Yogi</Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        {buttons.map((item)=>(
                        <Grid item>
                            <a href={item.link} style={{color:"white", textDecoration: "none"}}>{item.name}</a>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
