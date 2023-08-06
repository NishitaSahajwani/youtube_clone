import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../Utils/fetchFromAPI'

export default function Feed() {

  const [selectCategory, setselectCategory] = useState('New')
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`).then((res) => {
      setvideos(res.items)
    })
    .catch((error) => {
      console.error('Error fetching data:', error.message);
    });
  }, [selectCategory])

  return (
    <Stack sx={{flexDirection:{sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: 'auto',md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar selectCategory={selectCategory} setselectCategory={setselectCategory}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color: '#fff'}}>
          Copyright 2023
        </Typography> 
      </Box>
    
      <Box p={1} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectCategory} <span style={{color:"#D71313"}}>vidoes</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}
