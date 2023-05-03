// import React, { Fragment } from 'react';

// import styled from 'styled-components';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Typography from '@mui/material/Typography';
// import InputAdornment from '@mui/material/InputAdornment';
// import FilledInput from '@mui/material/FilledInput';
// import IconButton from '@mui/material/IconButton';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';
// import FormHelperText from '@mui/material/FormHelperText';
// import Button from '@mui/material/Button';
// import Pagination from '@mui/material/Pagination';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import TextField from '@mui/material/TextField';
// import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
// import PendingActionsIcon from '@mui/icons-material/PendingActions';
// import useScrollTrigger from '@mui/material/useScrollTrigger';

// import Slide from '@mui/material/Slide';
// import {
//   TableBody,
//   Table,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper
// } from '@material-ui/core';

// function createData(name,dateassign,datefilled,status) {
//   return { name,dateassign,datefilled,status };
// }

// const rows = [
//   createData('Patient information', '17 feb 2023', '17 feb 2023','pending'),
//   createData('Survey 1', '17 feb 2023', '17 feb 2023', 'completed'),
//   createData('Survey 2', '17 feb 2023', '17 feb 2023','pending'),
 
// ];
// const Wrapper = styled.section`
// .btn{
//   font-size: 1em;

// },
// .text{
//   color: gray;
// }
// `;
// const theme = createTheme({
//   status: {
//     danger: '#816179',
//   },
//   palette: {
//     primary: {
//       main: '#816179',
//       darker: '#816179',
//     },
//     neutral: {
//       main: '#816179',
//       // contrastText: '#fff',
//     },
//   },
// });
// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

  

// }


// export default function TableForm() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
// const handleClickShowPassword = () => setShowPassword((show) => !show);

// const handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };
//   return (
//     <>
//     <Wrapper>
//     <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",xs:'column'},margin:{lg:3},justifyContent:"space-between"}}>
    
// <Box>
//     <Typography variant="h4" gutterBottom sx={{textAlign:{lg:"left",md:"left",sm:"center"}}}>
//      Form    
//      <Box sx={{borderBottom:"4px solid #816179",width:110,textAlign:{lg:"left",md:"left",sm:"center",xs:"center"}}}></Box>
//       </Typography>
//       </Box>
//       <Box >
//      <Button variant="contained"
//                  style={{backgroundColor:"#816179",color:"white",marginTop:{lg:3},marginRight:5}}>
//        Assign survey
//       </Button>
     
    
//      <TextField
//      size="small" 
//      sx={{marginRight:1}}
//      placeholder='Serach'
//   InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         < ManageSearchIcon />
//       </InputAdornment>
//     ),
//   }}
// />

//   <FormControl sx={{width:100}} size="small">
//         <InputLabel id="demo-simple-select-label">Reduce</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           {/* <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem> */}
//         </Select>
//       </FormControl>

// </Box>
//  </Box>
  
//     <Fragment>
//       <TableContainer className="mb-4" >
//         <Table aria-label="simple table">
//           <TableHead >
//             <TableRow>
//               <TableCell className='btn'>Title</TableCell>
              
//               <TableCell align="right" className='btn'>Date assign</TableCell>
//               <TableCell align="right" className='btn'>Date filled &nbsp;</TableCell>
//               <TableCell align="right" className='btn'>Status&nbsp;</TableCell>
              
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => (
//               <TableRow key={row.name}>
//                 <TableCell component="th" scope="row" className='btn'>
//                   {row.name}
//                 </TableCell>
                
//                 <TableCell  align="right" className='text'>{row.dateassign}</TableCell>
//                 <TableCell align="right" className='text'>{row.datefilled}</TableCell>
//                 <TableCell align="right"className="btn-pill m-1 text badge badge-warning">


//                 {rows.status='completed'?<Button variant="contained"
//                  style={{backgroundColor:"#6ADE34",color:"#0085FF"}}startIcon={<LibraryAddCheckIcon />}>
//         Completed
//       </Button>:<Button variant="contained"
//        style={{backgroundColor:"#DECD34",color:"#0085FF"}}startIcon={<PendingActionsIcon />}>
//         Pending
//       </Button>}
//                 </TableCell>
                
       
                
               
                
            
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

     
//     </Fragment>
//     <ThemeProvider theme={theme}>
//     <Pagination count={10} color="neutral"  sx={{marginLeft:{lg:50},marginTop:5}}/>
//     </ThemeProvider>
   
//     </Wrapper>
//     </>
//   )
// }





import React, { Fragment } from 'react';
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import AttachmentIcon from '@mui/icons-material/Attachment';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {
  TableBody,
 

  TableContainer,
  TableHead,
  TableRow,
  
} from '@material-ui/core';
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Check from '@mui/icons-material/Check';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArticleIcon from '@mui/icons-material/Article';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { NavLink } from 'react-router-dom';
// import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import journeys from "../images/journeys.png"
import logo from "../images/image 1logoazra.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Link from '@mui/material/Link';

const drawerWidth = 240;
const drawerWidthMob = 60;
const theme = createTheme({
  status: {
    danger: '#816179',
  },
  palette: {
    primary: {
      main: '#816179',
      darker: '#816179',
    },
    neutral: {
      main: '#816179',
      // contrastText: '#fff',
    },
  },
});


const Wrapper = styled.section`
.btn{
  font-size: 1em;
  font-weight: 500;
  text-align: center;
letter-spacing: 0.2px;

  // color: #816179;

  // padding: 4em;
  // background: papayawhip;
},
.text{
  color: gray;
  text-align: center;
}
`;
function TableForm(props) {
  const navigate=useNavigate();
 const { window } = props;
  const trigger = useScrollTrigger();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const itmeList=[
    {
    text:'Dashboard',
    icon: <DashboardCustomizeIcon />,
   link:"/"
  },
    {
    text:'Journeys',
    icon: <Box
    component="img"
    sx={{
      height: 30,
      width: 30,
      maxHeight: { xs: 233, md: 167 },
      maxWidth: { xs: 350, md: 250 },
    }}
    alt="The house from the offer."
    src={journeys}
  /> ,
  link:"/Journeys"
  },
    {
    text:'Forms',
    icon:<ArticleIcon />,
    link:"/TableForm"
  },
   
  {
    text:'Analystics',
    icon:<EqualizerIcon />,
    link:'/analytics'
  },
  {
    text:'Patients',
    icon:<AddToPhotosIcon/>,
    link:'/patients'
   
  },
  {
    text:' Tasks',
    icon:<AssignmentIcon/>,
    link:"/tasks"
    
  }
  ]
  const items=[
    {
     
      text:'Settings',
      icon:<SettingsIcon/>,
      link:"/PatientProfile"
      
    },
    {
      text:'Role managmenet',
      icon:<ArrowForwardIcon/>,
      link:"/role"
      
    },
    {
      text:'Logout',
      icon:<LogoutIcon/>,
      link:"/PatientProfile"
      
    }

  ]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 function createData(name,dateassign,datefilled,status) {
  return { name,dateassign,datefilled,status };
}

const rows = [
  createData('Patient information', '17 feb 2023', '17 feb 2023','pending'),
  createData('Survey 1', '17 feb 2023', '17 feb 2023', 'completed'),
  createData('Survey 2', '17 feb 2023', '17 feb 2023','pending'),
 
];
   const drawer = (
    <>
    {/* ,md: 'block',lg: 'block', xl: 'block' */}
    <Box display={{ xs: 'none', sm: 'none' }}>
    <Toolbar />
    
   

    <List>
   
      {itmeList.map((item, index,) => {
        const {text,icon,link}=item;
        return(
          <NavLink to={link} style={{ textDecoration: 'none',color:"black" }}>
        <ListItem key={text} sx={{paddingX:1,marginTop:1}}  disablePadding button>
          {/* <ListItemButton> */}
            <ListItemIcon>
            {icon}
            </ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          {/* </ListItemButton> */}
        </ListItem>
        </NavLink>
        )
})}
      
    </List>
   
   
    <List sx={{position:"absolute",bottom:5}}>
    {items.map((item, index,) => {
        const {text,icon,link}=item;
        return(
          <NavLink to={link} style={{ textDecoration: 'none',color:"black" }}>
        <ListItem key={text} sx={{paddingX:1,marginTop:1}}  disablePadding button>
      
            <ListItemIcon>
            {icon}
            </ListItemIcon>
            
        </ListItem>
        </NavLink>
        )
})}
    </List>
    </Box>
    {/* ,md: 'none',lg: 'none' ,xl:"none"  */}
      <Box display={{ xs: 'block', sm: 'block'}}>
      <Toolbar />
      <Box
        component="img"
        display={{ xs: 'none', sm: 'block',md:"block",lg:"block",xl:"block"}}
        sx={{
         
            // marginTop:-5
        //   height: 80,
        //   width: 80,
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={logo}
      />
     
     

      <List>
     
        {itmeList.map((item, index,) => {
          const {text,icon,link}=item;
          return(
            <NavLink to={link} style={{ textDecoration: 'none',color:"black" }}>
          <ListItem key={text} sx={{paddingX:1,marginTop:1}}  disablePadding button>
            {/* <ListItemButton> */}
              <ListItemIcon>
              {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            {/* </ListItemButton> */}
          </ListItem>
          </NavLink>
          )
})}
        
      </List>
     
     
      <List sx={{position:"absolute",bottom:5}}>
      {items.map((item, index,) => {
          const {text,icon,link}=item;
          return(
            <NavLink to={link} style={{ textDecoration: 'none',color:"black" }}>
          <ListItem key={text} sx={{paddingX:1,marginTop:1}}  disablePadding button>
            {/* <ListItemButton> */}
              <ListItemIcon>
              {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            {/* </ListItemButton> */}
          </ListItem>
          </NavLink>
          )
})}
      </List>
      </Box>
      
     
    
    
    </>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Wrapper>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Box sx={{display:{xs:'block',sm:'none',md:"none"}}}>
<Slide appear={false} direction="down" in={!trigger}>
<AppBar 
// position="static"
      elevation={0}
        style={{ background: 'none' }}
      >
        <Toolbar    sx={{
      width: "100%",
      maxWidth: 600,
 
      ml:{sm:7,xs:7},
    }}style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
        
          {/* <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:{lg:50},marginTop:2}} >
          Role managmenet
          </Typography>
          <Box sx={{alignSelf:"flex-end",display:"flex",flexDirection:"row",}}>
          <Typography variant="h6"  component="div" color={'black'} sx={{marginRight:{lg:3,sm:2,xs:1},marginLeft:{sm:-30,xs:-20}}} >
          <PersonIcon />
          </Typography>
          <Typography variant="h6"  component="div" color={'black'} >
          <Link href="/notifications " underline="none">
          <NotificationsNoneIcon/>
      </Link>
         
          </Typography>
          </Box> */}
        </Toolbar>
      </AppBar>
      </Slide>    
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidthMob } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthMob },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            // display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthMob },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
      <Box sx={{display:{xs:'none',sm:'block',md:"block"}}}>
      <Slide appear={false} direction="down" in={!trigger}>
     <AppBar 
      elevation={0}
//         // position="fixed"
//         // position="static"
style={{ position: 'fixed', top: 0,background: 'none' }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
        // style={{  }}
      >
        <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
         
          {/* <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:50,marginTop:2}} >
          Role managmenet
          </Typography>
          <Box sx={{alignSelf:"flex-end",display:"flex",flexDirection:"row"}}>
          <Typography variant="h6"  component="div" color={'black'} sx={{marginRight:3}} >
          <PersonIcon />
          </Typography>
          <Typography variant="h6"  component="div" color={'black'} >
          <Link href="/notifications " underline="none">
          <NotificationsNoneIcon/>
      </Link>
         
          </Typography>
          </Box> */}
        </Toolbar>
      </AppBar>
      </Slide> 
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,     ml:{sm:4,xs:4,lg:0,md:0,xl:0}, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:7}}>

      
   

<Box
        sx={{
          boxShadow: 2,
          // width: '90rem',
    
          width:{lg:2500,md:2500,sm:500,xs:500},
          // height: '5rem',
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
        <Box sx={{display:"flex",flexDirection:'row',margin:{lg:3},justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
          Form    
          <Box sx={{borderBottom:"4px solid #816179",width:110,textAlign:{lg:"left",md:"left",sm:"center",xs:"center"}}}></Box>
           </Typography>
           </Box>
           <Box  sx={{display:"flex",flexDirection:{lg:'row',md:"row",sm:'column',xs:"column"},}}>
       <Button
                     style={{backgroundColor:"#816179",color:"white",margin:12,marginTop:{lg:5,sm:2,xs:2},marginRight:{lg:5}}}>
           Assign survey
          </Button>
         
        
         <TextField
         size="small" 
         sx={{marginRight:1,marginTop:{lg:3,sm:2,xs:2}}}
         placeholder='Serach'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            < ManageSearchIcon />
          </InputAdornment>
        ),
      }}
    />
    
      <FormControl sx={{width:100,marginTop:{lg:3,sm:2,xs:2}}} size="small">
            <InputLabel id="demo-simple-select-label">Reduce</InputLabel>
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
        <Fragment>
      <TableContainer className="mb-4" >
        <Table aria-label="simple table">
          <TableHead >
             <TableRow>
               <TableCell className='btn'>Title</TableCell>
              
               <TableCell align="right" className='btn'>Date assign</TableCell>
               <TableCell align="right" className='btn'>Date filled &nbsp;</TableCell>
              <TableCell align="right" className='btn'>Status&nbsp;</TableCell>
            
             </TableRow>
           </TableHead>
           <TableBody>
            {rows.map(row => (
             <TableRow key={row.name}>
               <TableCell component="th" scope="row" className='btn'>
                 {row.name}
               </TableCell>
                
               <TableCell  align="right" className='text'>{row.dateassign}</TableCell>
               <TableCell align="right" className='text'>{row.datefilled}</TableCell>
               <TableCell align="right"className="btn-pill m-1 text badge badge-warning">


               {rows.status='completed'?<Button variant="contained"
                style={{backgroundColor:"#6ADE34",color:"#0085FF"}}startIcon={<LibraryAddCheckIcon />}>        Completed
      </Button>:<Button variant="contained"
      style={{backgroundColor:"#DECD34",color:"#0085FF"}}startIcon={<PendingActionsIcon />}>
       Pending
     </Button>}
               </TableCell>
                
       
                
               
                
            
               </TableRow>
             ))}
           </TableBody>
         </Table>
     </TableContainer>
     <ThemeProvider theme={theme}>
    <Pagination count={10} color="neutral"  sx={{marginLeft:{lg:40,md:30,sm:10,xs:10},marginTop:5}}/>
    </ThemeProvider>
     
   </Fragment>
     
      {/* </Box> */}

</Box>
        
      </Box>
       
      </Box>
    </Box>
    </Wrapper>
  );
}

TableForm.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default TableForm;
