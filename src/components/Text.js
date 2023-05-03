import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Text(props) {
  return (
    <Box sx={{display:"flex",flexDirection:"row",margin:3}}>
    <Typography sx={{marginRight:10}}>
    
   {props.questNo}
    
    </Typography>
    <Typography>
    
    {props.questText}
    <Typography sx={{color:"#816179",textAlign:"left"}}>
    {props.texting} 
    </Typography>
    </Typography>
          
        </Box>
  )
}
