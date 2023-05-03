import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputAdornment from '@mui/material/InputAdornment';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   flexGrow: 1,
// }));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CreateTask() {
  const currencies = [
    {
      value: 'Patient information',
      label: 'Patient information',
    },
    {
      value: 'form 1',
      label: 'Form 1',
    },
    {
      value: 'Form 2',
      label: 'Form 2',
    },
    {
      value: 'form 3',
      label: 'Form 3',
    },
    {
      value: 'form 4',
      label: 'Form 4',
    },
    {
      value: 'form 5',
      label: 'Form 5',
    },
    {
      value: 'form 6',
      label: 'Form 6',
    },
    {
      value: 'form 7',
      label: 'Form 7',
    },
  ];
  return (
    <Box >
      
     
      <Typography variant="h4" gutterBottom textAlign={'left'}>
     Create Task
      </Typography>
      <Box sx={{display:"flex",flexDirection:"row",width:"100%"}}>
      
      <Box sx={{width:'50%',margin:3,}}> 
     <Typography variant="subtitle2" textAlign={"left"}>
        Title
      </Typography>
      <Box sx={{border:"1px solid #816179",padding:1,borderRadius:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>


<TextField
         
        placeholder='Title'
         variant="standard"
 InputProps={{
        disableUnderline: true,
      }}
          
        />
        </Box>
        </Box> 
        <Box sx={{width:'40%',margin:3,}}> 
        <Typography variant="subtitle2" textAlign={"left"}>
        Expiry Date
      </Typography>
      <Box sx={{ border:"1px solid #816179",padding:1,borderRadius:2,
         }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DemoContainer  components={['DatePicker']}>
        <DatePicker  placeholder="Expiry Date"  slotProps={{ textField: { variant: 'standard', fullWidth: true} }}
        //   slotProps={{ textField: { variant: 'standard', } }}
        />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
    </Box>


       
        </Box>
      
        <Box sx={{width: '95%',marginX:3}}> 
        <Typography variant="subtitle2" textAlign={"left"}>
        Description
      </Typography>
      
        <Box  
        component="form"
        sx={{
          '& .MuiTextField-root': {  },
        //   display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        
      >

        <TextField
       fullWidth 
       multiline={true}
       rows={3}
          placeholder="Description"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
        
        </Box>
        </Box>
        <Button variant="contained"
                 style={{backgroundColor:"#816179",color:"white",marginTop:10,position:"absolute",right:30}}>
     Add
      </Button>

    </Box>
   
  )
}
