import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: props => ({
      height: '40%',
      background: props.background,
      border: 0,
      borderRadius: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '5px 5px',
      justifyContent:'space-around',
      flex:1,
      margin: 10
    }),
    image: {  
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '25%'
    },
    heading : {
        fontWeight: 800,
        fontSize: 20,
        textAlign: "center",
        padding: '5px 0',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '55%'
    },
    content: {
        textAlign: "center",
        fontSize: 16,
        padding: '5px 0',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '75%'
    },
  });
  
  export default function OutlinedCard(props) {
   
    const classes = useStyles(props);
    console.log(props.background)

    return (
      <Card  className={classes.root} >
        <CardContent>
          <img className={classes.image} src={props.image} />
          <Typography className={classes.heading} component="h1">
         {props.heading}
        </Typography>
        <Typography className={classes.content} variant="p" component="p">
        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
        </Typography>
        </CardContent>
      </Card>
    );
  }
  