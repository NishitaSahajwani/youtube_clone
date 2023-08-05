import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
function Navbar() {

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{backgroundImage: "linear-gradient(to right, black , #000)", top:0, position: "sticky", justifyContent:"space-start"}} gap={5}>
        <Link to="/"
         style={{display:"flex", alignItems: 'center'}} >
            <img src='youtube.png' alt='logo' height={45}/> <span style={{color:"#FC1503",fontSize:'50px', marginLeft:'15px',fontWeight:'bold'}}>Stream</span><span style={{color:'white'}}>Tube</span>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar