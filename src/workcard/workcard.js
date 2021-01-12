import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: props => ({
      width: 263,
      height: 223,
      backgroundColor: 'pink',
      border: 0,
      borderRadius: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '30px 30px',
      marginTop: 100,
      marginLeft: 50
    }),
    image: {  
      margin: '0px 70px'
    },
    heading : {
        fontWeight: 800,
        fontSize: 20,
        textAlign: "center",
        padding: '5px 0'
    },
    content: {
        textAlign: "center",
        fontSize: 16,
        padding: '5px 0'
    },
  });
  
  export default function Workcard(props) {
   
    const classes = useStyles(props);
    console.log(props.background)

    return (<Card className={classes.root} variant="outlined">
    <CardContent>
     <img src={props.img}></img>
    </CardContent>
  </Card>
);
  }
  