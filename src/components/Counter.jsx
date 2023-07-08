import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount]=useState(0);
    const incCount=()=>{
        setCount(count++);
    }
    const decCount=()=>{
        setCount(count--);
    }
  return (
    <div style={{paddingTop:'100px'}} className='App'>
        <Typography variant='h2'>
        {count}
        </Typography>
        <br/><br/>
        <Button variant='contained' color='success' onClick={incCount}>+</Button>
        <br/><br/>
        <Button variant='contained' color='error' onClick={decCount}>-</Button>
    </div>
  )
}

export default Counter