import React, { useState } from 'react'
import {AppBar ,Button ,Typography,Toolbar,ListItemText,ListItem,List,IconButton,Drawer, useMediaQuery}
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'

function Navbar() {
   const[open,setOpen] = useState(false);
   const Theme = useTheme();
   const menuItems = ["About", "Services","Projects","Contacts"];
   const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))
  return (
    <>
    <AppBar elevation={0} className='Navbar' position='static' sx={{backgroundColor: "white",color: "black", borderBottom: "2px solid #fafafa"}}>
        <Toolbar>
            {/* mobile device */}
            {IsMobile ? (
                <div>
                    <IconButton color='inherit' onClick={()=> setOpen(true)}>
                        <MenuIcon />

                    </IconButton>
                </div>
            ) :
            // for Big device
           (
       < >
          
                
                <Typography sx={{flexGrow: 1}}>
                    <img src="/logo.png" alt="" />
                </Typography>
                {
                    menuItems.map((item)=>(
                        <Button Link color='inherit' key={item} > {item} </Button>
                    ))
                }
                <Button variant='outlined' sx={{color: "#2AB691", backgroundColor: "white",
                    borderRadius: "10px", "&:hover": {
                        backgroundColor : "#F03612", color: "white"
                    }}}>
                        Sign Up
                </Button>
          
       </>
           )}
        </Toolbar>
      
    </AppBar>
    <Drawer anchor='left' open={open} onClose={()=> setOpen(false)}>
        <List>
            {
                menuItems.map((item)=>(
                    <ListItem button key= {item} onClick={()=> setOpen(false)}>
                        <ListItemText>{item}</ListItemText>
                    </ListItem>
                ))
                
            }
            <ListItem button>
                <ListItemText primary= "Sign up" />
            </ListItem>

        </List>

    </Drawer>
    </>
  )
}

export default Navbar
