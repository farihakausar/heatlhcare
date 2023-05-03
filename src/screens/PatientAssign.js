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

export default function PatientAssign() {
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
      Patient/Assign form
      </Typography>
      <Box
       autoWidth={true}
      component="form"
      
      sx={{
        
        '& .MuiTextField-root': { m: 1,mr:0, width: '95%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          autoWidth={true}
          
          label="Select form to assign"
          // defaultValue="EUR"
          // helperText="Please select your currency"
        >
          {/* <Box> */}
          <TextField
     size="small" 
     sx={{marginRight:1,position:"absolute",right:0,marginBottom:4}}
     placeholder='Serach'
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        < ManageSearchIcon />
      </InputAdornment>
    ),
    
   
  }}
/>
          
            <Box sx={{borderBottom:"1px solid black",marginTop:6}}></Box>
          {currencies.map((option) => (
            <>
          <div style={{display:"flex",flexDirection:"row"}}>
           <Checkbox {...label} /> <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            </div>
            </>
          ))}
        </TextField>
        </div>
        </Box>
       
        <Box sx={{ width: '95%',marginLeft:4
         }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DemoContainer  components={['DatePicker']}>
        <DatePicker  label="Expiry Date" slotProps={{ textField: { fullWidth: true } }} />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
      {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { ml: 10 ,mt:4 ,width: '95%'},
      }}
      noValidate
      autoComplete="off"
    > */}
      
        <Box  
        component="form"
        sx={{
          '& .MuiTextField-root': {  mt:4 ,width: '95%'},
        }}
        
      >

        <TextField
       fullWidth 
       multiline={true}
       rows={3}
          label="Special instructions"
          
        />
         
        
        {/* </Box> */}
        
        </Box>
        <Button variant="contained"
                 style={{backgroundColor:"#816179",color:"white",marginTop:10,position:"absolute",right:30}}>
       Assign survey
      </Button>

    </Box>
   
  )
}
