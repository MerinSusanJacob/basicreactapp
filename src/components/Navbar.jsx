import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>
                    Trial App
                </Typography>
                <Button >
                    <Link to={"/"} style={{color:"white",textDecoration:"none"}}>Login</Link>
                </Button>
                <Button style={{color:"white"}}>
                    <Link to={"/sign"} style={{color:"white",textDecoration:"none"}}>Signup</Link>
                </Button>
                <Button>
                    <Link to={"/home"} style={{color:"white",textDecoration:"none"}}>Home</Link>
                </Button>
                <Button>
                    <Link to={"/avatar"} style={{color:"white",textDecoration:"none"}}>Avatar</Link>
                </Button>
                <Button>
                    <Link to={"/effect"} style={{color:"white",textDecoration:"none"}}>use Effect</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar