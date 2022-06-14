import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function NavbarHomepage() {
  return (
    <Box boxShadow={3}>
        <Container>
            <Grid container alignItems="center" height="125px" >
                <Grid item sm={1}>
                    <img alt="logo" src="/assets/logo/Group2.png" />
                </Grid>
                <Grid item>
                    <Box display="flex" alignSelf="center">
                        <Typography sx={{fontFamily: "Poppins", color:"#26B893", fontWeight: "700"}}>Forum Group Diskusi</Typography>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box
                        component="form"
                        sx={{
                            marginLeft:"4vw",        
                            display: "flex",
                            alignItems: "center",
                            width: "548px",
                            border: "1px solid #CDCDCD",
                            borderRadius: "10px",
                        }}
                    >
                        <IconButton sx={{ p: "10px" }} aria-label="menu">
                            <SearchIcon style={{ color: "#9A9A9A" }} />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Cari Topik diskusi disini yuk" />
                    </Box>
                </Grid>
                <Grid item display="flex">
                    <Button variant="outlined" sx={{textTransform:"none", borderRadius:"15px", marginRight:"3vw", color:"#26B893"}}>
                        <img src="/assets/icon/Vector-buat-thread.png" alt='buat thread' /> 
                        <span style={{marginLeft:"1vw"}}>Buat Thread</span>
                    </Button>
                    <Avatar alt="Remy Sharp" src="/assets/icon/manprofil.png"></Avatar>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
