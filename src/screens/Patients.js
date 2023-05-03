import React,{useState, Fragment } from 'react'
import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Badge from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import Pagination from '@mui/material/Pagination';

import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import AttachmentIcon from '@mui/icons-material/Attachment';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
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
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';

import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GppGoodIcon from '@mui/icons-material/GppGood';
const drawerWidth = 240;
const drawerWidthMob = 60;

function createData(firstname,lastname,contact,tags,email) {
  return { firstname,lastname,contact,tags,email};
}

const rows = [
  createData('Maria','Liam','567890-0987654','hij','mariaralion@gmil.com'),
  createData('Maria','Liam','567890-0987654','hij','mariaralion@gmil.com'),
  createData('Maria','Liam','567890-0987654','hij','mariaralion@gmil.com'),
  createData('Maria','Liam','567890-0987654','hij','mariaralion@gmil.com'),

 
];
const Wrapper = styled.section`
.btn{
  font-size: 1em;

},
.text{
  color: gray;
}
`;
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
function Patients(props) {
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
      categories: ['Jan', 'Apr',  'July', 'Aug', 
        'Oct', 'Nov',
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
    name: "Input patient",
    data: [45, 52, 38, 24, 33, 26]
  },
  {
    name: "Output patient",
    data: [35, 41, 62, 42, 13, 18]
  }
],)

const [serie, setserie] = useState([{
  // name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671]
}, {
  // name: 'Social Media',
  type: 'line',
  data: [440, 505, 414, 671]
}])
      const [option, setoption] = useState({
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
       
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [14,15,17,16],
        // xaxis: {
        //   type: 'datetime'
        // },
      
      })
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
                  show:false,
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
                labels: [14,15,16,17
                ],
                markers: {
                  size: 0
                },
               
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
        
          <Typography variant="h6"  component="div" color={'black'} sx={{alignSelf:"flex-start",fontWeight:"bold",fontSize:50,marginTop:2}} >
    Patients  
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
        Patients 
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
        <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",sm:'column',xs:"column"},marginTop:7}}>
        <Paper sx={{  width:{lg:2500,sm:570,xs:570}}}>
       
     
    </Paper>
      </Box>
      
        <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",xs:'column'},marginTop:7}}>
        <Paper sx={{ width:{lg:2500,sm:570,xs:570} ,marginRight:7,}}>
    <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",xs:'column'},margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h6" gutterBottom sx={{textAlign:{lg:"left",md:"left",sm:"center"}}}>
        Patient Overview
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
        <Paper sx={{width:{lg:2500,sm:570,xs:570} ,marginRight:7,marginTop:{sm:2,xs:2}}}>
        <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",xs:'column'},margin:3,justifyContent:"space-between"}}>
    
    <Box>
        <Typography variant="h6" gutterBottom sx={{textAlign:{lg:"left",md:"left",sm:"center"}}}>
        Monthly Overview
         
          </Typography>
          </Box>
          <Box >
         
      
    
      
    
    </Box>
      </Box> 
      
        <div id="chart">
        <Box sx={{position:"absolute",bottom:150,marginX:15,textAlign:"center"}}>
      <Typography variant="h6" gutterBottom color={"#816179"}>
      2507  
          </Typography>
      <Typography variant="subtitle" gutterBottom color={"#979797"}>
      Patient this month
          </Typography>
          </Box>
   <ReactApexChart options={option} series={serie} type="bar" height={350} />
    </div>
    
    </Paper>

   
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",marginTop:7}}>
    
       



    
    <Paper sx={{ width:{lg:2500,md:2500,sm:570,xs:570},marginTop:{sm:2,xs:2} }}>
    <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",xs:'column'},margin:3,justifyContent:"space-between"}}>

<Box>
   <Typography variant="h4" gutterBottom sx={{textAlign:{lg:"left",md:"left",sm:"center"},color:"gray"}}>
    Patients 
    
     </Typography>
     </Box>
     <Box  sx={{display:"flex",flexDirection:{lg:'row',md:"row",sm:'column',xs:"column"},}}>
    <Button href='/AddEditPatient'
                style={{backgroundColor:"#816179",color:"white",margin:12,marginTop:{sm:2,xs:2},marginRight:5}}>
      Add New Patient
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
<Fragment>
      <TableContainer className="mb-4" >
        <Table aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell className='btn'>First name</TableCell>
              
              <TableCell align="right" className='btn'>Last Name</TableCell>
              <TableCell align="right" className='btn'>Contact &nbsp;</TableCell>
              <TableCell align="right" className='btn'>Tags&nbsp;</TableCell>
              <TableCell align="right" className='btn'>Email&nbsp;</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
        
              <TableRow key={row.firstname}>
               
                <TableCell  scope="row" className='btn text' href="/PatientProfile"   style={{ textDecoration: 'none' }}component="a">
                <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Avatar
        alt="Remy Sharp"
        src="data:image/jpeg;base64,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"
        sx={{ width: 40, height: 40,marginRight:2 }}
      />
                  {row.firstname}
                  <Badge color="secondary" badgeContent={0} showZero  sx={{
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "red"
    },marginLeft:4
  }}
  // sx={{marginLeft:4}}
  >
        <ChatBubbleIcon  />
       
      </Badge>
      </Box>
                </TableCell>
                
                <TableCell  align="right" className='text'>{row.lastname}</TableCell>
                <TableCell align="right" className='text'>{row.contact}</TableCell>
               
                <TableCell align="right"className="btn-pill m-1 text badge badge-warning">


            <Button variant="contained"
                 style={{backgroundColor:"gray",color:"white"}}>
    hihpj
      </Button>
                </TableCell>
                
                <TableCell align="right" className='text'>{row.email}</TableCell>
                
               
                
            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     
    </Fragment>
    <ThemeProvider theme={theme}>
    <Pagination count={10} color="neutral"  sx={{marginLeft:{lg:40,md:30,sm:10,xs:10},marginTop:5}}/>
    </ThemeProvider>
   
    
</Paper>

   </Box>
 
      </Box>
    </Box>
    </Wrapper>
  );
}

Patients.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Patients;
