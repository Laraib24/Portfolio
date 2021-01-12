import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Statusbar from '../statusbar/statusbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Aboutfooter from '../aboutfooter/aboutfooter';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';


const useStyles = makeStyles({
    aboutcontainer: props=>({
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#353353',
      padding: '10px 10px'
    }),
    heading: props => ({
      color: 'white',
      marginLeft: 290,
      marginBottom: 60,
    }),
    avatar: { 
      width: 120,
      height: 120,
      marginTop: 50,
      marginLeft: 300,
  },
  about: {
    color: 'white',
    border: '1px solid grey',
    marginLeft: 480,
    marginRight: 10,
    fontSize: 18,
    lineHeight: 2,
    display: 'flex',
    borderRadius: 40,
    padding: '18px 18px',
    marginTop: -120,
  },
  aboutright: {
    padding: '4px 4px'
  },
  aboutleft: { 
    padding: '0px 10px',
    marginRight: -35,
  },
  aboutfooter: {
    display: 'flex',
    marginLeft: 250,
    marginTop: 50,
  },
  })
  export default function About(props){
    const classes = useStyles(props);

     return(<div className={classes.aboutcontainer}>
       <h1 className={classes.heading}>About Me</h1>
       <div>
       <Avatar className={classes.avatar} alt="Remy Sharp" src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg"/>
       <div className={classes.about}>
         <div className={classes.aboutright} >
         <p>I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
          <Button variant="contained" color="secondary">
           Download CV
          </Button>
          </div>
          <div className={classes.aboutleft}>
               <Statusbar heading={'Development'} per={'60'}></Statusbar>
               <Statusbar  heading={'UI/UX design'} per={'80'}></Statusbar>
               <Statusbar  heading={'Photography'} per={'40'}></Statusbar>
          </div>
       </div>
       </div>
       <div className={classes.aboutfooter}>
         <Aboutfooter image={'https://webstockreview.net/images/clipart-flames-fire-symbol-12.png'} num={'198'} text={'projects completed'}></Aboutfooter>
         <Aboutfooter  image={'https://i.pinimg.com/originals/00/cc/b6/00ccb6f59d1215f5666ad229af120e9f.png'} num={'5670'} text={'Cup of coffee'}></Aboutfooter>
         <Aboutfooter  image={'https://i.dlpng.com/static/png/6736490_preview.png'} num={'427'} text={'Satishfied Clients'}></Aboutfooter>
         <Aboutfooter  image={'https://cdn3.iconfinder.com/data/icons/vote/16/medal_rank_premium-512.png'}  num={'35'} text={'Nominees Winner'}></Aboutfooter>
       </div>
       </div>)
  }
