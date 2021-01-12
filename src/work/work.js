import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Workcard from '../workcard/workcard';

const useStyles = makeStyles({
    services: props=> ({
      display: 'flex',
      marginLeft: 290,
    }),
    workcontainer: props=>({
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#353353',
      height: 500,
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
export default function Work(props){
    const classes = useStyles(props);

     return(<div className={classes.workcontainer}>
       <h1 className={classes.heading}>Recent Works</h1>
       <Workcard></Workcard>
       </div>)}
