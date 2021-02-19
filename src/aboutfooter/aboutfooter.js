import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { StylesContext } from '@material-ui/styles';

const useStyles = makeStyles({
    root: props => ({
        display: 'flex',
    }),
    heading : {
        fontWeight: 800,
        fontSize: 26,
        color: 'white',
        textAlign: "center"
    },
    icons: {
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white',
        textAlign: "center"
    },
    container: {
        display: 'flex',
        justifyContent:'space-around',
        flex:1,
        margin: 5,
        flexDirection: 'column',
        padding: '20px 20px',
        border: '5px solid grey',
        borderRadius: 40,
        height: '60%'
    },
    image: {
        color: 'white',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '25%',
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