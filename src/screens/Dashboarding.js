import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import { NavLink } from 'react-router-dom';
import { green, pink } from '@mui/material/colors';
import PageviewIcon from '@mui/icons-material/Pageview';
import Avatar from '@mui/material/Avatar';
import task from "../images/task.png"
import forming from "../images/form.png"
import poeple from "../images/people.png"
import jornyes from "../images/jornyes.png"
import ListAltIcon from '@mui/icons-material/ListAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import ContactsIcon from '@mui/icons-material/Contacts';

import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';

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


function Dashboarding(props) {
      const [options, setoptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 3, ],
      curve: ['smooth', 'smooth'],
     
    },
    colors: ['#816179', '#D0EAE1'],
    
    legend: {
      position: 'top',
      labels: {
        colors: 'gray',
        useSeriesColors: false
    },
    },

    
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val 
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  },)
  const [series, setseries] = useState( [{
    name: "Male",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Female",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  }
],)

const [serie, setserie] = useState([{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }]);
      const [option, setoption] = useState({
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors:['#0085FF', '#0085FF', '#0085FF'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['M'],
            ['T'],
            ['W'],
            
            ['T'],
            ['F'],
            ['S'],
            ['S'], 
          ],
          // fill: {
          //   colors: ['#F44336', '#E91E63', '#9C27B0']
          // },
          labels: {
            style: {
              // colors: 'blue',
              fontSize: '12px'
            }
          }
        }
      },)
      const [optios, setoptios] = useState({
            chart: {
              type: 'donut',
            },
          
            colors: ['#816179', '#D0EAE1'],
                
                legend: {
                  show: true,
                  customLegendItems: ['Task completed ','Task not completed'],
                  position: 'bottom',
                  labels: {
                    colors: 'gray',
                    useSeriesColors: false
                },
                },
                
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                        position: 'top',
                        labels: {
                          colors: 'gray',
                          useSeriesColors: false
                      },
                      },
              }
            }]
          },)
        
          const [seris, setseris] = useState([25,75])
          const [seres, setseres] = useState([
              {
                // name: 'TEAM B',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
              }, {
                // name: 'TEAM C',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
              }],)
              const [optons, setoptons] = useState( {
                chart: {
                  height: 350,
                  type: 'line',
                  stacked: false,
                },
                stroke: {
                  width: [0, 2],
                  curve: 'smooth'
                },
                colors: ['#D0EAE1', '#816179'],
                plotOptions: {
                  bar: {
                    columnWidth: '50%'
                  }
                },
                
                fill: {
                  opacity: [0.85, 0.25, 1],
                  gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                  }
                },
                legend: {
                  show: false,},
                labels: ['01/01/2003', '01/01/2003', '01/01/2003', '01/01/2003', '01/01/2003', '01/01/2003', '07/01/2003',
                  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
                ],
                markers: {
                  size: 0
                },
                xaxis: {
                  type: 'datetime'
                }
               
              },)
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
         Dashboarding
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
         Dashboarding
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
        sx={{ flexGrow: 1, p: 3, ml:{sm:4,xs:5,lg:0,md:0,xl:0}, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display:"flex",flexDirection:"row",marginTop:{lg:7,sm:3,xs:3,md:3}}}>
        <Paper sx={{ width:{lg:2500,md:2500,sm:500,xs:500} }}>
       
     <Box sx={{display:"flex",flexDirection:"row",marginTop:7,margin:{lg:3,sm:2,xs:2,md:2},justifyContent:"space-between",textAlign:"center"}}>
<Box sx={{display:"flex",flexDirection:"row"}}>
<Avatar sx={{ bgcolor: '#D03C57',width:50,height:50 }} 
>
       <Groups2Icon sx={{width:40,height:40}} /> 
      </Avatar>
      <Box sx={{marginLeft:1}}>
      <Typography varient='subtitle' color={"gray"}>Total patients</Typography>
      <Typography variant="h6" gutterBottom sx={{fontWeight:500,}}>2.0</Typography>
      </Box>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row"}}>
<Avatar sx={{ bgcolor: '#FF7A00',width:50,height:50 }} 
>
       <ListAltIcon sx={{width:40,height:40}} /> 
      </Avatar>
      <Box sx={{marginLeft:1}}>
      <Typography varient='subtitle' color={"gray"}>Total Forms</Typography>
      <Typography variant="h6" gutterBottom sx={{fontWeight:500,}}>2.0</Typography>
      </Box>
      </Box><Box sx={{display:"flex",flexDirection:"row"}}>
<Avatar sx={{ bgcolor: '#0085FF',width:50,height:50 }} 
>
       <ContactsIcon sx={{width:40,height:40}} /> 
      </Avatar>
      <Box sx={{marginLeft:1}}>
      <Typography varient='subtitle' color={"gray"}>Total Jourenys</Typography>
      <Typography variant="h6" gutterBottom sx={{fontWeight:500,}}>2.0</Typography>
      </Box>
      </Box><Box sx={{display:"flex",flexDirection:"row"}}>
<Avatar sx={{ bgcolor: '#EB00FF',width:50,height:50 }} 
>
       <AssignmentIcon sx={{width:40,height:40}} /> 
      </Avatar>
      <Box sx={{marginLeft:1}}>
      <Typography varient='subtitle' color={"gray"}>Tasks</Typography>
      <Typography variant="h6" gutterBottom sx={{fontWeight:500,}}>2.0</Typography>
      </Box>
      </Box>
     </Box>
    </Paper>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",marginTop:7}}>
        <Paper sx={{width:{lg:2500,sm:500,xs:500} }}>
       
       <Box sx={{display:"flex",flexDirection:"row",margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
        Patient Count
         
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
    //           <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
    
    </Box>
      </Box> 
        <div id="chart">  <ReactApexChart options={options} series={series} type="line" height={350} />
   </div>
    </Paper>
      </Box>
        <Box sx={{display:"flex",flexDirection:{lg:"row",xs:"column"},marginTop:7}}>

        <Paper sx={{ width:{lg:2500,sm:500,xs:500} ,marginRight:7}}>
        <Box sx={{display:"flex",flexDirection:"row",margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h6" gutterBottom sx={{textAlign:"center"}}>
       Forms
         
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
    //           <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
    
    </Box>
      </Box> 
        <div id="chart">
   <ReactApexChart options={option} series={serie} type="bar" height={350} />
    </div>
    
    </Paper>

    <Paper sx={{width:{lg:2500,sm:500,xs:500}  ,marginRight:7}}>
        <Box sx={{display:"flex",flexDirection:"row",margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
     Tasks
         
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
    //           <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
    
    </Box>
      </Box> 
      <div id="chart">
   <ReactApexChart options={optios} series={seris} type="donut" />
     </div>
    
    </Paper>
        </Box>
        <Box sx={{display:"flex",flexDirection:{lg:"row"},marginTop:7}}>
        <Paper sx={{ width:{lg:2500,sm:500,xs:500} ,marginRight:{lg:7}}}>
       
       <Box sx={{display:"flex",flexDirection:'row',margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
        Journeys
         
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
    //           <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
    
    </Box>
      </Box> 
     
   <div id="chart">
<ReactApexChart options={optons} series={seres} type="line" height={350} />
 </div>
    </Paper>
      </Box>
      </Box>
    </Box>
  );
}

Dashboarding.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboarding;


