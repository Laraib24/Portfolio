import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { StylesContext } from '@material-ui/styles';

const useStyles = makeStyles({
    root: props => ({
        display: 'flex',
        margin: '50px 50px'
    }),
    heading : {
        fontWeight: 800,
        fontSize: 26,
        color: 'white',
        marginLeft: 20,
        margin: '0px 0px',
        padding: '10px 10px'
    },
    icons: {
        marginTop: 10,
        width: 20,
        height: 150
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white'
    },
    container: {
        display: 'flex',
        padding: '10px 30px',
        margin: '40px 40px',
        border: '1px solid yellow',
        borderRadius: 40
    },
    image: {
        width: 40,
        height: 50,
        color: 'grey'
    }
  });

  export default function Aboutfooter(props) {
   
    const classes = useStyles(props);
    console.log(props.background)

    return (<div className={classes.container}>
        <div className={classes.icons}> <img className={classes.image} src={props.image} /></div>
        <div>
    <h1 className={classes.heading}>{props.num}</h1>
    <p className={classes.text}>{props.text}</p>
        </div>
    </div>);
  }