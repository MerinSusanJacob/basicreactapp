import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableArray = () => {
    var person=[{
        name:"Merin",
        age:25
    },
    {
        name:"Sherin",
        age:35
    }
]
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontFamily:'cursive',color:'red'}}>Name</TableCell>
                        <TableCell style={{fontFamily:'cursive',color:'red'}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {person.map((value,index)=>{
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray