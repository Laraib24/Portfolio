import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    profile: props=> ({
      backgroundColor: '#353353',
      height: 557,
      marginLeft: 270,
    }),
    profcontainer: {
        marginLeft: 500,
        paddingTop: 100
    },
    avatar: { 
        width: 120,
        height: 120,
    },
    name: { 
       color: 'white',
       marginLeft: 15
    },
    context: {
        color: 'white',
        marginLeft: -33,
        marginTop: -10,
        fontWeight: 600,

    },
    social: {
        color: 'white',
        padding: '5px 5px',

    },
    socialcon:{
        marginLeft: -20,
        marginTop: 30
    },
    button: {
        borderRadius: 40,
        marginLeft: -10,
        marginTop: 40,
        width: 150
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
  })

export default function Profile(props){
    const classes = useStyles(props);
     return(<div  id="profile" className={classes.profile}>
         <div className={classes.profcontainer}>
       <Avatar className={classes.avatar} alt="Remy Sharp" src="https://jthemes.net/themes/html/bolby/demo/images/avatar-1.svg"/>
       <h1 className={classes.name}>Laraib</h1>
       <p className={classes.context}>I am a frontend Developer</p>
       <div className={classes.socialcon} >
           <a href="https://www.instagram.com/laraib996/?hl=en"><InstagramIcon className={classes.social}></InstagramIcon></a>
           <a href="https://twitter.com/Laraib0304"><TwitterIcon className={classes.social}></TwitterIcon></a>
           <a  href="https://www.facebook.com/laraib425/"><FacebookIcon className={classes.social}></FacebookIcon></a>
           <a  href="https://ro.pinterest.com/rockstarstatus5/_saved/"><PinterestIcon className={classes.social}></PinterestIcon></a>
           <a  href="#"><LanguageIcon className={classes.social}></LanguageIcon></a>
       </div>
       <Button className={classes.button} variant="contained" color="secondary"><a className={classes.link} href="mailto:laraib24@outlook.com">Hire me</a></Button>
       </div>
       </div>)
  }