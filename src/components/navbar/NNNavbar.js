import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Navbar() {
  return (
    <Box boxShadow={3}>
        <Container>
            <Grid container alignItems="center" height="125px" >
                <Grid item sm={1}>
                    <img alt="logo" src="/assets/logo/Group2.png" />
                </Grid>
                <Grid item xs>
                    <Box display="flex" alignSelf="center">
                        <Typography sx={{fontFamily: "Poppins", color:"#26B893", fontWeight: "700"}}>Forum Group Diskusi</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Button variant="success" style={{marginRight: "1vw", padding: "0.3vh 1.5vw 0.3vh 1.5vw", backgroundColor:"#26B893"}}>Masuk</Button>
                    <Button variant="outline-success" style={{padding: "0.3vh 1.5vw 0.3vh 1.5vw", color:"#26B893"}}>Daftar</Button>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
