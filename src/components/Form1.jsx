import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Form1 = () => {
    var[name,setName]=useState("Tiya");
    var[input,setInput]=useState("");
    const changeName=(e)=>{
        //console.log("checked");
        setInput(e.target.value);
    }
    const showValue=()=>{
        console.log("checked");
        setName(input);
    }
  return (
    <div style={{paddingTop:"100px"}}>
        <Typography variant='h3'>Welcome {name}</Typography>
        <br/>
        <TextField label="name" variant="outlined" onChange={changeName}/>
        <br/>
        <br/>
        <Button variant="contained" onClick={showValue}>Submit</Button>
    </div>
  )
}

export default Form1