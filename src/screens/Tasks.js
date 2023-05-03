import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
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
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import journeys from "../images/journeys.png"
import logo from "../images/image 1logoazra.png"
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
}
`;
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
function Tasks(props) {
 const { window } = props;
 const trigger = useScrollTrigger();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function createData(name,title,descition,craetedon,createdby,action) {
    return { name,title,descition,craetedon,createdby,action};
  }
  
  const rows = [
    createData('01', 'Patient Information','Patient perosnal information', '17 feb 2023','Dr.Delson','action'),
    createData('02', 'Patient Information','Patient perosnal information', '17 feb 2023','Dr.Delson','action'),
    createData('03', 'Patient Information','Patient perosnal information', '17 feb 2023','Dr.Delson','action'),
    createData('04', 'Patient Information','Patient perosnal information', '17 feb 2023','Dr.Delson','action')
  
   
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
          <ListItem key={text} sx={{paddingX:2,marginTop:1}}  disablePadding button>
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
          <ListItem key={text} sx={{paddingX:2,marginTop:1}}  disablePadding button>
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
        
          <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:{lg:50},marginTop:2}} >
          Task
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
          </Box>
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
         
          <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:50,marginTop:2}} >
          Task
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
          </Box>
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
        sx={{ flexGrow: 1, p: 3,ml:{sm:4,xs:4,lg:0,md:0,xl:0}, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:7}}>

      
   

<Box
        sx={{
          boxShadow: 2,
          // width: '90rem',
          width:{lg:2500,md:2500,sm:550,xs:550},
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
        <Fragment>
          <Box sx={{display:"flex",flexDirection:"row",justifyContent:"flex-end",marginY:3}}>
        <Button variant="contained" href="/CreateTask"
                 style={{backgroundColor:"#816179",color:"white",marginTop:{lg:3},marginRight:5}}>
    Create
      </Button>
     
    
     <TextField
     size="small" 
     sx={{marginRight:1}}
     placeholder='Serach'
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        < ManageSearchIcon />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        < MoreVertIcon />
      </InputAdornment>
    ),
  }}
/>
</Box>
      <TableContainer className="mb-4" >
        <Table aria-label="simple table" sx={{
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}
>
  
          <TableHead >
            <TableRow>
              <TableCell className='btn'>Int</TableCell>
              
              <TableCell align="right" className='btn'>Title</TableCell>
              <TableCell align="right" className='btn'>Description &nbsp;</TableCell>
              <TableCell align="right" className='btn'>Created On&nbsp;</TableCell>
              <TableCell align="right" className='btn'>Created by&nbsp;</TableCell>
              <TableCell align="right" className='btn'>Action&nbsp;</TableCell>
          
            </TableRow>
            
            {/* <Box sx={{borderBottom:"1px solid gray",width:700,position: 'absolute',
width: "58rem",
height: 0,
}}></Box>
             */}
          </TableHead>
       
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className='btn text'>
                  {row.name}
                </TableCell>
                
                <TableCell  align="right" className='text'>{row.title}</TableCell>
                <TableCell align="right" className='text'>{row.descition}</TableCell>
                <TableCell align="right" className='text'>{row.craetedon}</TableCell>
                <TableCell align="right" className='text'>{row.createdby}</TableCell>
                <TableCell align="right"className="text">
               

                {rows.action='1'?<>
                <Box sx={{display:"flex",flexDirection:"row"}}>< BorderColorIcon/> <DeleteOutlineIcon/></Box></>:<Button variant="contained"
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

Tasks.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Tasks;


