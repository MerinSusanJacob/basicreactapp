import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';

const Home = () => {
    var [fname,setFname]=useState("Merin");
    const changeName=()=>{
        console.log("Button Clicked");
        setFruitname("Mango");
    }
    var [fruitname, setFruitname]=useState("Apple");
  return (
    <div style={{paddingTop:"100px"}} className='App'>
        <Typography>Welcome {fruitname}</Typography>

        <Button variant="contained" onClick={changeName}>Change Name</Button>
    </div>
  )
}

export default Home