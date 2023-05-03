
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import AttachmentIcon from '@mui/icons-material/Attachment';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

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
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
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
const drawerWidth = 240;
const drawerWidthMob = 60;

function Analytics(props) {
  const [options, setoptions] = useState({
    
    chart: {
      height: 350,
      type: 'bar',
      
    },

    plotOptions: {
      bar: {
        
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    fill: {
      colors: ['#0085FF', '#0085FF', '#0085FF']
    },
    legend: {
      labels: {
        colors:['#D03C57','#816179','#D0EAE1',  ],
        // useSeriesColors: true
    },
     
      fontSize: '17px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,

                show: true,
                customLegendItems: ['Below value ','Average value','Peak value'],
                position: 'top',
                labels: {
                  colors: 'gray',
                  useSeriesColors: false
              },

    markers: {
      width: 5,
      height: 5,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 12,
     
  },
              },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        if(val==0){
          return   "";
        }
        else{
        return val + "%";}
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      categories: [10,20,30,40,50,60,70,80,90,100],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
          
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      
    },
    yaxis: {
      title: {
        text: 'Completeion rate',
        style: {
          color: 
          'gray',
          fontSize: '12px',
    
      },
      }
    },
   
  },
)

  const [series, setseries] = useState( [{
    name: 'Below value',
    data: [10,20,30,0,0,0,0,0,0,0]
  },{
    name: 'Average value',
    data: [0,0,0,40,50,60,0,0,0,0]
  },{ name: 'Peak value',
  data: [0,0,0,0,0,0,70,80,90,100]
}],)
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
      Analystics  
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
          Analystics 
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
        sx={{ flexGrow: 1, p: 3,  ml:{sm:4,xs:4,lg:0,md:0,xl:0}, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",sm:'column',xs:"column"},marginTop:7}}>

        <Paper sx={{ width:{lg:2500,sm:500,xs:500} ,marginRight:7}}>
      <MenuList dense>
        <MenuItem>
          <ListItemText   primaryTypographyProps={{fontSize: '20px'}}  sx={{textAlign:"left"}}>Performance summary</ListItemText>
          
      <FormControl sx={{width:120}} size="small">
            <InputLabel id="demo-simple-select-label">This week</InputLabel>
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
        </MenuItem>
        <MenuItem sx={{display:"flex",flexDirection:"row",textAlign:"left"}}>
          <ListItemText   primaryTypographyProps={{fontSize: '19px'}}  sx={{color:"#816179"}}>1024 </ListItemText>
          <ListItemText sx={{color:"gray",marginLeft:{lg:-25,md:-20}}}>Total patients counts</ListItemText>
        </MenuItem>
        <MenuItem>
          
        </MenuItem>
       
        <MenuItem>
          <ListItemText   primaryTypographyProps={{fontSize: '23px'}}  sx={{textAlign:"left",fontWeight:"bold"}}>Completetion details</ListItemText>
        </MenuItem>
        <MenuItem sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Box sx={{display:"flex",flexDirection:"row"}}>

            <ListItemText primaryTypographyProps={{fontSize: '19px'}} sx={{marginRight:3 ,color:"purple"}}>69% </ListItemText>
            <ListItemText  sx={{color:"gray"}}>Full completion</ListItemText>

            </Box>
          
            <Box sx={{display:"flex",flexDirection:"row"}}>

            <ListItemText primaryTypographyProps={{fontSize: '19px'}} sx={{marginRight:3 ,color:"purple"}}>31% </ListItemText>
            <ListItemText  sx={{color:"gray"}}>partial completion</ListItemText>

            </Box>
          
          
        </MenuItem>
        
        <MenuItem sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Box sx={{display:"flex",flexDirection:"row"}}>

            <ListItemText primaryTypographyProps={{fontSize: '19px'}} sx={{marginRight:3 ,color:"purple"}}>69% </ListItemText>
            <ListItemText  sx={{color:"gray"}}>Full completion</ListItemText>

            </Box>
          
            <Box sx={{display:"flex",flexDirection:"row"}}>

            <ListItemText primaryTypographyProps={{fontSize: '19px'}} sx={{marginRight:3 ,color:"purple"}}>31% </ListItemText>
            <ListItemText  sx={{color:"gray"}}>partial completion</ListItemText>

            </Box>
          
          
        </MenuItem>
        
        <MenuItem sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Box sx={{display:"flex",flexDirection:"row"}}>

            <ListItemText primaryTypographyProps={{fontSize: '19px'}} sx={{marginRight:3 ,color:"purple"}}>69% </ListItemText>
            <ListItemText  sx={{color:"gray"}}>Full completion</ListItemText>

            </Box>
          
            <Box sx={{display:"flex",flexDirection:"row"}}>

            <ListItemText primaryTypographyProps={{fontSize: '19px'}} sx={{marginRight:3 ,color:"purple"}}>31% </ListItemText>
            <ListItemText  sx={{color:"gray"}}>partial completion</ListItemText>

            </Box>
          
          
        </MenuItem>
        
       
      </MenuList>
    </Paper>



    
        
         <Paper sx={{  width:{lg:2500,sm:500,xs:500},marginTop:{sm:3,xs:3}}}>
         <div id="chart">
<ReactApexChart options={options} series={series} type="bar" height={350} />
</div>
    </Paper>

    
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",marginTop:7}}>
        <Paper sx={{ width:{lg:2500,md:2500,sm:500,xs:500}}}>
         <Box sx={{display:"flex",flexDirection:'row',margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h6" gutterBottom sx={{textAlign:{lg:"left",md:"left",sm:"center"}}}>
        Patient Summary 
         
          </Typography>
          </Box>
          <Box >
         
      
    
      <FormControl sx={{width:120}} size="small">
            <InputLabel id="demo-simple-select-label">This week</InputLabel>
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
     <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",sm:'column',xs:'column'},marginTop:7,margin:3,justifyContent:"space-between",textAlign:"center"}}>
<Box>
      <Typography variant="h4" gutterBottom color={'#816179'}>4567</Typography>
      <Typography varient='subtitle' color={"gray"}>Total patients counts</Typography>
      </Box>
<Box>
      <Typography variant="h4" gutterBottom color={'#7B70F8'}>3456</Typography>
      <Typography varient='subtitle' color={"gray"}>Total patients completed tasks</Typography>
      </Box>
<Box>
      <Typography variant="h4" gutterBottom color={'#FF7A00'}>4567</Typography>
      <Typography varient='subtitle' color={"gray"}>Total patients completed forms</Typography>
      </Box>
<Box>
      <Typography variant="h4" gutterBottom color={'#EB00FF'}>4567</Typography>
      <Typography varient='subtitle' color={"gray"}>Total patients completed Jouenrys</Typography>
      </Box>
     </Box>
    </Paper>
      </Box>
      </Box>
     
    </Box>
  );
}

Analytics.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Analytics;