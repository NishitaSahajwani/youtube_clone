import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader';

export default function Videos({videos,direction}) {
  if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' alignItems="start" justifyContent='start' gap={2}>
      {
        videos.map((item,id)=> {
          return(
            <Box key={id}>
              {
                item.id.videoId && <VideoCard video = {item}/>
              }
                {
                  item.id.channelId && <ChannelCard channelDetail={item}/>
                }
            </Box>
          )
        })
      }
    </Stack>
  )
}
