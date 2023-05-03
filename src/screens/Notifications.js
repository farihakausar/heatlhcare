import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
export default function Notifications() {
  return (
    <>
    <Typography variant="h6" noWrap component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:50,margin:2,textAlign:"left"}} >
    Notifications
   </Typography>
   <Box
   sx={{
     boxShadow: 2,
   
     width:{lg:1000,md:900,sm:500,xs:500},
      // height: '5rem',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      p: 1,
      mx: {lg:15,md:12,sm:7,xs:1},
     borderRadius: 2,
     textAlign: 'center',
     fontSize: '0.875rem',
     fontWeight: '700',
   }}
 >
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",marginX:4,marginY:1}}>
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
        <Box>
   <Typography variant="h6" gutterBottom>
       New form added by Dr .deslon
      </Typography>
      </Box>
      <Box>

        <CheckCircleOutlineIcon/>
        <CancelIcon/>
      </Box>
 </Box>
<Box sx={{textAlign:"left",}}>
<Button variant="contained"
                 style={{backgroundColor:"#816179",color:"white",paddingX:25,marginTop:{lg:3}}}>
   View
      </Button>
</Box>
</Box>
</Box>
   <Box
   sx={{
     boxShadow: 2,
    //  width: '90rem',
    marginTop:3,
    width:{lg:1000,md:900,sm:500,xs:500},
     // height: '5rem',
     bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
     color: (theme) =>
       theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
     p: 1,
     mx: {lg:15,md:12,sm:7,xs:1},
     borderRadius: 2,
     borderRadius: 2,
     textAlign: 'center',
     fontSize: '0.875rem',
     fontWeight: '700',
   }}
 >
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",marginX:4,marginY:1}}>
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
        <Box>
   <Typography variant="h6" gutterBottom>
       New form added by Dr .deslon
      </Typography>
      </Box>
      <Box>

        <CheckCircleOutlineIcon/>
        <CancelIcon/>
      </Box>
 </Box>
<Box sx={{textAlign:"left",}}>
<Button variant="contained"
                 style={{backgroundColor:"#816179",color:"white",paddingX:25,marginTop:{lg:3}}}>
   View
      </Button>
</Box>
</Box>
</Box>
   <Box
   sx={{
     boxShadow: 2,
    //  width: '90rem',
    marginTop:3,
    width:{lg:1000,md:900,sm:500,xs:500},
     // height: '5rem',
     bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
     color: (theme) =>
       theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
     p: 1,
     mx: {lg:15,md:12,sm:7,xs:1},
     borderRadius: 2,
     textAlign: 'center',
     fontSize: '0.875rem',
     fontWeight: '700',
   }}
 >
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",marginX:4,marginY:1}}>
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
        <Box>
   <Typography variant="h6" gutterBottom>
       New form added by Dr .deslon
      </Typography>
      </Box>
      <Box>

        <CheckCircleOutlineIcon/>
        <CancelIcon/>
      </Box>
 </Box>
<Box sx={{textAlign:"left",}}>
<Button variant="contained"
                 style={{backgroundColor:"#816179",color:"white",paddingX:25,marginTop:{lg:3}}}>
   View
      </Button>
</Box>
</Box>
</Box>
</>
  )
}
