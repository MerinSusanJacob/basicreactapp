import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Form2 = () => {
    var[input,setInput]=useState({});
    var[value,setValue]=useState({});
    var[display,setDisplay]=useState(true);

    const inputHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        setDisplay(false);
        console.log(input);
    }
    const showTable=()=>{
        setValue(input);
    }
  return (
    <div style={{paddingTop:"100px"}}>
        {display?<p>Fill up the fields</p>:<p></p>}
       <TextField variant='outlined' label='username' name='username' onChange={inputHandler}/>
        <br/><br/>
        <TextField variant='outlined' label='email' name='email' onChange={inputHandler}/>
        <br/><br/>
        <TextField variant='outlined' label='password' name='pass' onChange={inputHandler}/>
        <br/><br/><br/><br/>
        <Button variant='contained' onClick={showTable}>Submit</Button>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{value.username}</TableCell>
                        <TableCell>{value.email}</TableCell>
                        <TableCell>{value.pass}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        
    </div>
  )
}

export default Form2