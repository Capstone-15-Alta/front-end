import React from 'react'
import NavbarHomepage from '../components/navbar/NavbarHomepage'
import Grid from '@mui/material/Grid';
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Footer from '../components/footer/Footer'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallMadeIcon from '@mui/icons-material/CallMade';
import HomeCard from '../components/card/HomeCard'

const Home = () => {
  const fillter = [
    {name: "Terbaru", icon: AccessTimeIcon, isActive: true},
    {name: "Trending", icon: CallMadeIcon, isActive: false},
    // {name: "Kategori", icon: AccessTimeIcon, isActive: false},
  ]

  const dataHomepage = [
    {username:"Albert Flores", email:"Albert Flores@gmail.com", isVerified: true, content:"Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?", timePost: "03:00 pm", view:"120", profile:"/assets/icon/manprofil.png"},
    {username:"Albert Flores", email:"Albert Flores@gmail.com", isVerified: true, content:"Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?", timePost: "03:00 pm", view:"120", profile:"/assets/icon/manprofil.png"},
    {username:"Albert Flores", email:"Albert Flores@gmail.com", isVerified: true, content:"Pixel Buds Pro : Apakah Mampu Melawan AirPods Pro ?", timePost: "03:00 pm", view:"120", profile:"/assets/icon/manprofil.png"},
  ]
  return (
    <>
    <NavbarHomepage />
    <Container>
      <Grid container minHeight="80vh" pt="2vh">
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={6}>
          <Box display="flex">
            {fillter.map((item)=>(
                <Button variant={item.isActive === true ? "contained" : "outlined"} sx={{textTransform:"none", borderRadius:"15px", marginRight:"3vw", color: item.isActive?"white":"#26B893", bgcolor: item.isActive?"#26B893":"white"}}>
                  <item.icon />
                  <span style={{marginLeft:"1vw"}}>{item.name}</span>
                </Button>
            ))}
            <Button variant="outlined" sx={{textTransform:"none", borderRadius:"15px", marginRight:"3vw", color:"#26B893"}}>
              <img src="/assets/icon/vector-kategori.png" />
              <span style={{marginLeft:"1vw"}}>Kategori</span>
            </Button>
          </Box>
          <Box pt="3vh">
            {dataHomepage.map((item)=>(
              <Box py="4vh">
                <HomeCard data={item} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={3}>
        
        </Grid>
      </Grid>
    </Container>
    <Footer />
    </>
  )
}

export default Home