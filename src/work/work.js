import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Workcard from '../workcard/workcard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    services: props=> ({
      display: 'flex',
    }),
    workcontainer: props=>({
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#353353',
      paddingBottom: 100
    }),
    heading: props => ({
      color: 'white',
      marginLeft: 10,
      marginBottom: 50,
    }),
    bottomtext: {
      textAlign: "center",
      color: 'white',
      marginTop: 20,
      marginBottom: 100,
      fontWeight: 600,
    },
    card: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'space-around',
      flex:1,
      margin: 10,
      
    },
    button: {
      color: 'white',
      fontWeight: 700,
      marginRight: 10
    }
  })
export default function Work(props){
    const classes = useStyles(props);

     return(<div id="works" className={classes.workcontainer}>
       <h1 className={classes.heading}>Recent Works</h1>
       <div>
         <div className={classes.card}>
         <Button color="secondary">Everything</Button>
         <Button className={classes.button}>Creative</Button>
         <Button  className={classes.button}>Art</Button>
         <Button  className={classes.button}>Design</Button>
         <Button  className={classes.button}>Branding</Button>
         </div>
       <div className={classes.card}>
       <Workcard img={'https://jthemes.net/themes/html/bolby/demo/images/works/1.svg'}></Workcard>
       <Workcard img={'https://jthemes.net/themes/html/bolby/demo/images/works/2.svg'}></Workcard>
       <Workcard img={'https://jthemes.net/themes/html/bolby/demo/images/works/3.svg'}></Workcard>
       </div>
       <div className={classes.card}>
       <Workcard img={'https://jthemes.net/themes/html/bolby/demo/images/works/4.svg'}></Workcard>
       <Workcard img={'https://jthemes.net/themes/html/bolby/demo/images/works/5.svg'}></Workcard>
       <Workcard img={'https://jthemes.net/themes/html/bolby/demo/images/works/6.svg'}></Workcard>
       </div>
       </div>
       </div>)}
