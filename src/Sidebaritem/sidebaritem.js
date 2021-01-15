import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
    root: props => ({
        display: 'flex',
        marginLeft: 25,
        cursor: 'pointer'
    }),
    heading : {
        fontWeight: 800,
        fontSize: 16,
        color: 'white',
        marginLeft: 20,
        margin: '0px 0px',
        padding: '10px 0px'
    },
    icons: {
        color: 'yellow',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 10,
    },
  });

  export default function Sidebaritem(props) {
   
    const classes = useStyles(props);

    return (<div onClick={() => document.getElementById(`${props.id}`).scrollIntoView()} className={classes.root}>
        <div className={classes.icons}>{props.icon}</div>
         <h3 className={classes.heading}>{props.h3}</h3>
    </div>);
  }