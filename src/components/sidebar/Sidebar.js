import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Sidebar() {
    const menu = [
        {name:"Homepage", link:"/", icon:"/assets/icon/Vector_home.png"},
        {name:"Notifkasi", link:"/", icon:"/assets/icon/Vector_notifikasi.png"},
        {name:"Explore Topik", link:"/", icon:"/assets/icon/Vector-explore.png"},
        {name:"Profil", link:"/", icon:"/assets/icon/Vector-profil.png"},
    ]
    return (
    <Box>
        <Typography>
            MENU
        </Typography>
        {menu.map((item)=>(
            <Box pt="1vw">
                <Link href={item.link} underline="none" color="black">
                    <img src={item.icon} alt={item.name} width="20vw" />
                    <span style={{marginLeft:"1vw"}}>
                        {item.name}
                    </span>
                </Link>
            </Box>
        ))}
    </Box>
  )
}
