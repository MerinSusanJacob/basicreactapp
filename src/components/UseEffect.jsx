import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
        var [gname,setGname]=useState()
        const changeR=()=>{
            setGname("React")
        }
        const changeA=()=>{
          setGname("Angular")
        }
        const changeN=()=>{
          setGname("Next")
        }
       useEffect(()=>{
          changeR()
       },[])
  return (
    <div style={{paddingTop:'100px'}} >
        <Typography>Welcome to {gname}</Typography>
        <Button variant='contained' color='secondary' onClick={changeR}>React</Button>
        <Button variant='contained' color='primary' onClick={changeA}>Angular</Button>
        <Button variant='contained' color='error' onClick={changeN}>Next</Button>
    </div>
  )
}

export default UseEffect