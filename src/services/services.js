import React from 'react';
import Cards from '../pages/card';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    services: props=> ({
      display: 'flex',
      marginLeft: 290,
    }),
    servicescontainer: props=>({
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#353353'
    }),
    heading: props => ({
      color: 'white',
      marginLeft: 290,
      marginBottom: 80,
    }),
    bottomtext: {
      textAlign: "center",
      color: 'white',
      marginTop: 20,
      marginBottom: 100,
      fontWeight: 600,
      marginLeft: 250
    }
  })
  export default function Services(props){
    const classes = useStyles(props);

     return(<div className={classes.servicescontainer}>
       <h1 className={classes.heading}>Services</h1>
       <div className={classes.services}>
         <Cards heading={'UI/UX design'} background = {'rgb(108, 108, 229)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-1.svg'}></Cards>
         <Cards heading={'Web Development'} background = {'rgb(249, 215, 76)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-2.svg'}></Cards>
         <Cards heading={'Photography'} background = {'rgb(249, 123, 139)'} image = {'https://jthemes.net/themes/html/bolby/demo/images/service-3.svg'}></Cards>
       </div>
       <p className={classes.bottomtext}>Looking for a custom job?<Link href="#"> Click here </Link>to contact me</p>
       </div>)
  }
