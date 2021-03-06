import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: props => ({
        display: 'flex',
        marginLeft: 25,
    }),
    heading : {
        fontWeight: 800,
        fontSize: 16,
        color: 'white',
        marginLeft: 20,
        margin: '0px 0px',
        padding: '10px 0px'
    },
    feedcontainer: {
        width: 435,
        margin: '25px 25px',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '15px 15px',
        border: '10px solid yellow',
        ['@media (max-width: 1274px)']: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
        }
    }
  });

  export default function Feedcard(props) {
   
    const classes = useStyles(props);
    console.log(props.background)

    return (<div className={classes.feedcontainer}>{props.fed}{props.follow}
    </div>);
  }