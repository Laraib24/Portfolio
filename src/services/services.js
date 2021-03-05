import React from 'react';
import Cards from '../pages/card';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    services: props=> ({
      display: 'flex',
      justifyContent: "center",
      alignItems: "center", 
      marginBottom: 80,
      ['@media (max-width: 650px)']: {
        display: 'flex',
        flexDirection: 'column'
    },
    }),
    servicescontainer: props=>({
      backgroundColor: '#353353',
      height: '100%',
      marginTop: -22,
    }),
    heading: props => ({
      color: 'white',
      marginLeft: 10,
      ['@media (max-width: 1274px)']: {
        paddingTop: 50,
        paddingBottom: 50
    }
    }),
    bottomtext: {
      textAlign: "center",
      color: 'white',
      fontWeight: 600,
      paddingBottom: 50
    }
  })
  export default function Services(props){
    const classes = useStyles(props);

     return(<div id="service" className={classes.servicescontainer}>
       <h1 className={classes.heading}>Services</h1>
       <div  className={classes.services}>
         <Cards heading={'UI/UX design'} background = {'rgb(108, 108, 229)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-1.svg'} para={'Who will use your product? How do we reach that person? Questions that we tackle together in our meetings.'}></Cards>
         <Cards heading={'Web Development'} background = {'rgb(249, 215, 76)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-2.svg'} para={'Building according to web standards on a safe and reliable online platform. That is what I am good at.'} ></Cards>
         <Cards heading={'Content Writing'} background = {'rgb(249, 123, 139)'} image = {'https://cdn2.iconfinder.com/data/icons/flat-education-icons-5/96/Writing-512.png'}  para={'I ensure that your content stands out. From start to conclusion , I will try to to make it unique as much as possible.'}></Cards>
       </div>
       <p className={classes.bottomtext}>Looking for a custom job?<Link href="#"> Click here </Link>to contact me</p>
       </div>)
  }
