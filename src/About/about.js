import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Statusbar from '../statusbar/statusbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Aboutfooter from '../aboutfooter/aboutfooter';
import Media from 'react-media';


const useStyles = makeStyles({
    aboutcontainer: props=>({
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#353353',
      padding: '10px 10px',
      height: 768,
      ['@media (max-width: 1274px)']: {
        height: '100%'
    }
    }),
    heading: props => ({
      color: 'white',
      marginLeft: 10,
    }),
    avatar: { 
      width: 120,
      height: 120,
      padding: '0px 10px'
  },
  about: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 5,
    color: 'white',
    border: '1px solid grey',
    fontSize: 18,
    lineHeight: 2,
    borderRadius: 40,
    padding: '15px 15px',
    ['@media (max-width: 1274px)']: {
      height: '100%',
      padding: '25px 25px'
  }
  },
  aboutright: {
    width: '60%'
  },
  aboutleft: { 
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%'
  },
  aboutfooter: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '30%',
    ['@media (max-width: 1274px)']: {
      width: '100%',
      height: '30%',
      marginTop: 50
  }
  },
  ab: {
    display: 'flex',
    margin: 10
  }
  })
  export default function About(props){
    const classes = useStyles(props);

     return(<div id="about" className={classes.aboutcontainer}>
       <h1 className={classes.heading}>About Me</h1>
       <div className={classes.ab}>
         <Media  query="(min-width: 1024px)">
       <Avatar className={classes.avatar} alt="Remy Sharp" src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg"/>
       </Media>
       <div className={classes.about}>
         <div className={classes.aboutright} >
         <p>I am Laraib Mahmood, web developer (frontend) from Islamabad, Pakistan. I have rich experience in web site design and building and customization, also I can also work with angular</p>
          <Button variant="contained" color="secondary">
           Download CV
          </Button>
          </div>
          <div className={classes.aboutleft}>
               <Statusbar background={'blue'} heading={'Development'} per={'100'}></Statusbar>
               <Statusbar  background={'red'} heading={'UI/UX design'} per={'30'}></Statusbar>
               <Statusbar  background={'yellow'} heading={'Photography'} per={'40'}></Statusbar>
          </div>
       </div>
       </div>
       <div className={classes.aboutfooter}>
         <Aboutfooter image={'https://webstockreview.net/images/clipart-flames-fire-symbol-12.png'} num={'198'} text={'projects completed'}></Aboutfooter>
         <Aboutfooter  image={'https://i.pinimg.com/originals/00/cc/b6/00ccb6f59d1215f5666ad229af120e9f.png'} num={'5670'} text={'Cup of coffee'}></Aboutfooter>
         <Aboutfooter  image={'https://i.dlpng.com/static/png/4685763-make-friends-svg-png-icon-free-download-222142-onlinewebfontscom-making-friends-png-980_866_preview.png'} num={'427'} text={'Satishfied Clients'}></Aboutfooter>
         <Aboutfooter  image={'https://cdn3.iconfinder.com/data/icons/vote/16/medal_rank_premium-512.png'}  num={'35'} text={'Nominees Winner'}></Aboutfooter>
       </div>
       </div>)
  }
