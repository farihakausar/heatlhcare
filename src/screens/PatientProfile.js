import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import Check from '@mui/icons-material/Check';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ArticleIcon from '@mui/icons-material/Article';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListItemText from '@mui/material/ListItemText';
import women from "../images/women.png"
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import journeys from "../images/journeys.png"
import logo from "../images/image 1logoazra.png"
import PersonIcon from '@mui/icons-material/Person';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const drawerWidth = 240;
const drawerWidthMob = 60;

function PatientProfile(props) {
 const { window } = props;
  const trigger = useScrollTrigger();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const data = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];
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
        
          <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:50,marginTop:2}} >
    Patient Profile 
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
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } ,color:"black"}}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:50,marginTop:2}} >
        Patient profile
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
        sx={{ flexGrow: 1, p: 3,ml:{sm:4,xs:4,lg:0,md:0,xl:0},width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",sm:'column',xs:"column"},marginTop:7}}>
        {/* sx={{
    
   }} */}
        <Paper sx={{ marginRight:7,boxShadow: 2,
    //  width: '90rem',
    width:{lg:2500,sm:570,xs:570} ,
     // height: '5rem',
     bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
     color: (theme) =>
       theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
     p: 1,
     width:'35rem' ,
     borderRadius: 2,
     textAlign: 'center',
     fontSize: '0.875rem',
     fontWeight: '700',}}>
        <Box sx={{display:"flex",flexDirection:"column",paddingY:7,paddingX:4}}>
            <Box >
            <Badge
        overlap="circular"
        
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <CameraAltIcon alt="Remy Sharp" sx={{color:"white",
          backgroundColor: '#816179',borderRadius:4,paddingTop:0.5}} src="/static/images/avatar/1.jpg" />
        }
      >
        <Avatar alt="Travis Howard" src={women} sx={{ height: 100, width: 100, margin: "auto" }} />
      </Badge>
       
      </Box>
      <Typography varient="subtitle" sx={{marginTop:2,fontWeight:"bold"}}>Maria Lieum</Typography>
      <Typography varient="subtitle" sx={{color:"gray"}}>mariaLieum@gmail.com</Typography>
      <Button  sx={{ marginTop:2,}} href="/chat"
                 style={{border:"1px  solid gray",color:"gray"}}>
       Send Messege
      </Button>
        </Box>
     
    </Paper>



    
         <Paper sx={{  width:{lg:2500,md:2500,sm:570,xs:570} ,marginTop:{lg:1,sm:4,md:1,xs:3} }}>
         <Link href="/editpatient" underline="none" style={{ textDecoration: 'none' ,color:"gray"}}>
         <ModeEditOutlineIcon sx={{position:{lg:"absolute",md:"absolute",sm:"absolute"},right:{lg:20,md:30,xs:25,sm:25},margin:2}}/>
</Link>
        
      <Box sx={{display:"flex",flexDirection:"row",margin:6,justifyContent:"space-between"}}>
        
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>Gender</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>Female</Typography>
          <Box sx={{border:"1px solid gray",marginTop:1}}></Box>
        </Box>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>Birthday</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>10 feb 2003</Typography>
          <Box sx={{border:"1px solid #979797",marginTop:1}}></Box>
        </Box>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>Phone no</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>098765434</Typography>
          <Box sx={{border:"1px solid #979797",marginTop:1}}></Box>
        </Box>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:4,justifyContent:"space-between"}}>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>Street Address </Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>Gi Diphonogro</Typography>
          <Box sx={{border:"1px solid gray",marginTop:1}}></Box>
        </Box>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>City</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>California</Typography>
          <Box sx={{border:"1px solid #979797",marginTop:1}}></Box>
        </Box>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>Zip code</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>655852</Typography>
          <Box sx={{border:"1px solid #979797",marginTop:1}}></Box>
        </Box>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:4,justifyContent:"space-between"}}>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom>Status</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>Active number</Typography>
        
        </Box>
        <Box width={'25%'}>
          <Typography variant="subtitle1" gutterBottom>Registartion date</Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom>10 feb 2003</Typography>
          
        </Box>
        <Box width={'20%'}>
          <Typography variant="subtitle1" gutterBottom></Typography>
          <Typography variant="subtitle1" color={"gray"} gutterBottom></Typography>
         
        </Box>
       
      </Box>
    </Paper>
    
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",marginTop:7}}>
    
       



    
         <Paper sx={{  width:{lg:2500,md:2500,sm:570,xs:570} , }}>
         <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",xs:'column'},margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h4" gutterBottom sx={{textAlign:{lg:"left",md:"left",sm:"center"},color:"gray"}}>
         Form    
         
          </Typography>
          </Box>
          <Box >
         <Button variant="contained" href='/PatientForm'
                     style={{backgroundColor:"#816179",color:"white",marginTop:{lg:3},marginRight:5}}>
           Assign survey
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
      }}
    />
    
      <FormControl sx={{width:100}} size="small">
            <InputLabel id="demo-simple-select-label">Expand</InputLabel>
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
    </Paper>
    
        </Box>
      
         <Box
  m={1} //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  
//   sx={boxDefault}
>
  <Button variant="contained" style={{backgroundColor:"#816179",color:"white",}}sx={{ height: 40 }}>
  Delete Patient
  </Button>
</Box>
      </Box>
    </Box>
  );
}

PatientProfile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default PatientProfile;