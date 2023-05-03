import React,{useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Box from '@mui/material/Box';
export default function (props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
<>
<Box sx={{display:"flex",flexDirection:'row',margin:3,justifyContent:"space-between"}}>
<Box>
<Typography variant="h6" gutterBottom sx={{textAlign:'left'}}>
     Add new Patient  
    
      </Typography>
      </Box>
      <Box>
      <FormControl sx={{width:100,textAlign:'right'}} size="small">
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      </Box>
      </Box>
 <Box
        sx={{
          // boxShadow: 2,
          width: '70rem',
        
          height: '25rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
       <Box sx={{margin:3,display:'flex',flexDirection:"row",justifyContent:"space-between"}}> 
      <Box sx={{width:'45%'}}>
     <Typography variant="subtitle2" textAlign={"left"}>
        First name
      </Typography>
      {/* <Box sx={{border:"1px solid #816179",padding:1,borderRadius:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

      </Box> */}
       <Box  
        component="form"
        sx={{
          '& .MuiTextField-root': {  },
        //   display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        
      >

        <TextField
       fullWidth 
      
          placeholder=" enter First name"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
        
        </Box>

        </Box>
        
        <Box sx={{width:'45%'}}>
     <Typography variant="subtitle2" textAlign={"left"}>
       Enter last name
      </Typography>
      {/* <Box sx={{border:"1px solid #816179",padding:1,borderRadius:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

      </Box> */}
       <Box  
        component="form"
        sx={{
          '& .MuiTextField-root': {  },
        //   display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        
      >

        <TextField
       fullWidth 
      
          placeholder="Enter last name"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
        
        </Box>

        </Box>
    </Box>
      <Box sx={{display:"flex",flexDirection:"column",width:"100%"}}>
     
      <Box sx={{margin:3,display:'flex',flexDirection:"row",justifyContent:"space-between"}}> 
      <Box sx={{width:'45%'}}>
     <Typography variant="subtitle2" textAlign={"left"}>
        Conatct no
      </Typography>
      {/* <Box sx={{border:"1px solid #816179",padding:1,borderRadius:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

      </Box> */}
       <Box  
        component="form"
        sx={{
          '& .MuiTextField-root': {  },
        //   display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        
      >

        <TextField
       fullWidth 
      
          placeholder=" enter Conatct no"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
        
        </Box>

        </Box>
        
        <Box sx={{width:'45%'}}>
     <Typography variant="subtitle2" textAlign={"left"}>
       Enter email
      </Typography>
      {/* <Box sx={{border:"1px solid #816179",padding:1,borderRadius:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

      </Box> */}
       <Box  
        component="form"
        sx={{
          '& .MuiTextField-root': {  },
        //   display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        
      >

        <TextField
       fullWidth 
      
          placeholder="Enter email"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
        
        </Box>

        </Box>
    </Box>
    <Box sx={{width: '95%',marginX:3}}> 
        <Typography variant="subtitle2" textAlign={"left"}>
          Disease
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
      
          placeholder="Enter disease"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
        
        </Box>
        <Box sx={{width: '95%',marginY:3}}> 
        <Typography variant="subtitle2" textAlign={"left"}>
       Enter address
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
          placeholder="field info"
    
        InputLabelProps={{shrink: false}}
        />
         
        
        {/* </Box> */}
       
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",position:{lg:"absolute"},right:{lg:70},marginTop:5,justifyContent:{md:"flex-end"}}}>
        <Button  sx={{ px: 7}}
                 style={{border:"1px solid #816179",color:"gray",marginRight:6}}>
      Upload File
      <FileUploadIcon sx={{marginLeft:2}}/>
      </Button>
        <Button variant="contained" sx={{ px: 7}}
                 style={{backgroundColor:"#816179",color:"white"}}>
       Save
      </Button>
      </Box>
        </Box>
        </Box>
    </Box>
    </Box>

</>
  )
}
