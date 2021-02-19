import React from 'react';
import Cards from '../pages/card';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    services: props=> ({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      alignItems: "center",
      marginTop: 80, 
      marginBottom: 80
    }),
    servicescontainer: props=>({
      backgroundColor: '#353353',
      marginTop: '-2%',
      height: 700
    }),
    heading: props => ({
      color: 'white',
      marginLeft: 10,
    }),
    bottomtext: {
      textAlign: "center",
      color: 'white',
      fontWeight: 600,
    }
  })
  export default function Services(props){
    const classes = useStyles(props);

     return(<div id="service" className={classes.servicescontainer}>
       <h1 className={classes.heading}>Services</h1>
       <div  className={classes.services}>
         <Cards heading={'UI/UX design'} background = {'rgb(108, 108, 229)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-1.svg'}></Cards>
         <Cards heading={'Web Development'} background = {'rgb(249, 215, 76)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-2.svg'}></Cards>
         <Cards heading={'Photography'} background = {'rgb(249, 123, 139)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-3.svg'}></Cards>
       </div>
       <p className={classes.bottomtext}>Looking for a custom job?<Link href="#"> Click here </Link>to contact me</p>
       </div>)
  }
