import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Text from '../components/Text';
import Rating from '@mui/material/Rating';
export default function PatientForm() {
  return (
    <>
  <Box >
    <Typography variant="h4" gutterBottom sx={{textAlign:"left",margin:5}} >
    Patient/Form
    </Typography>
  
<Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",textAlign:"left",margin:4}}>
<Typography variant="subtitle1" display="block" gutterBottom sx={{color:"gray",}}>
     Form title: Patient information 
      </Typography>
<Typography variant="subtitle1"display="block" gutterBottom sx={{color:"gray"}}>
     Description :  Patient information
      </Typography>

     
      </Box>
      <Box sx={{borderBottom:"1px solid gray",marginTop:3}}></Box>
     
   <Text texting="mariya"questNo="Q1"questText="Enter your name"/>
   <Box sx={{borderBottom:"1px solid gray",marginTop:3}}></Box>
   <Text texting="mariyaadil@gmail.com"questNo="Q2"questText="Enter your email address"/>
   <Box sx={{borderBottom:"1px solid gray",marginTop:3}}></Box>
   <Text texting="21"questNo="Q3"questText="Enter your age"/>
   <Box sx={{borderBottom:"1px solid gray",marginTop:3}}></Box>
   <Text texting="01 feb 2023"questNo="Q4"questText="Enter your checkup date"/>
   <Box sx={{borderBottom:"1px solid gray",marginTop:3}}></Box>
   <Text texting="columbia 680 "questNo="Q5"questText="Enter your address"/>
   <Box sx={{borderBottom:"1px solid gray",marginTop:3}}></Box>
   <Text questNo="Q6"questText="Rate our services"/>
   <Box sx={{textAlign:"left",marginLeft:15}}>


   
       <Rating name="half-rating"sx={{
    "& .MuiRating-iconFilled": {
      color: "#816179"
    },
    "& .MuiRating-iconHover": {
      color: "#816179"
    },
    // marginLeft:{lg:-110,md:-70,sm:-50,}
    // sm:-50,md:-70,xs:-7}

  }} defaultValue={2.5} precision={0.5} />
  </Box>
  </Box>
    </>
  )
}
