import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: props => ({
      width: '27%',
      height: 223,
      backgroundColor: 'white',
      border: 0,
      borderRadius: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '10px 10px',
      ['@media (max-width: 1024px)']: {
        width: '20%',
        height: '20%'
    },
    ['@media (max-width: 650px)']: {
      width: '45%',
      marginTop: 10
   },
   ['@media (max-width: 418px)']: {
    width: '35%',
    marginTop: 10
 },
    }),
    image: {  
      display: 'block',
      margin: 'auto auto',
      width: '100%',
      borderRadius: 40
    },
    heading : {
        fontWeight: 800,
        fontSize: 20,
        textAlign: "center",
        padding: '5px 0'
    }, 
      });
  
  export default function Workcard(props) {
   
    const classes = useStyles(props);
    console.log(props.background)

    return (<Card className={classes.root} variant="outlined">
    <CardContent>
     <img className={classes.image} src={props.img}></img>
    </CardContent>
  </Card>
);
  }
  