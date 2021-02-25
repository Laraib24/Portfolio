import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: props=> ({
      backgroundColor: '#353353',
      height: '100%',
      marginTop: -28,
      paddingBottom: 50
    }),
    blogcontainer: props=>({
      display: 'block',
      backgroundColor: '#353353',
      marginLeft: 10,
    }),
    heading: {
        color: 'white',
        fontSize: 42,
        marginLeft: 10
    },
    headingtwo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 600
    },
    text: {
        color: 'white',
        fontWeight: 500,
        fontSize: 14

    },
    field: {
        backgroundColor: 'white',
        borderRadius: 40,
        outline: 'none',
        border: 'none',
        width: '30%',
        height: 50,
        margin: '10px 10px',
        ['@media (max-width: 650px)']: {
            marginLeft: '5%',
            width: '90%'
         },
    },
    sub: {
        width: '30%',
        height: 50,
        margin: '10px 10px',
        outline: 'none',
        border: 'none',
        borderRadius: 40,
        ['@media (max-width: 650px)']: {
            marginLeft: '5%',
            width: '90%'
         },
    },
    msg: {
        width: '65%',
        height: 200,
        outline: 'none',
        border: 'none',
        borderRadius: 40,
        margin: '10px 10px',
        ['@media (max-width: 650px)']: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '90%'
         },
    },
    con: {
        marginLeft: 0,
        marginTop: 40,
       
    },
    conone: {
        display: 'flex',
        flexDirection: 'column',
       
    },
    btn: {
        width: 100,
        padding: '10px 10px',
        marginTop: 20,
        marginRight: 'auto',
        marginLeft: 20,
        borderRadius: 30,
        ['@media (max-width: 650px)']: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '90%'
         },
        

    }
  })
 
  export default function Contact(props){
    const classes = useStyles(props);

     return(<div id="contact" className={classes.root}>
         <h1 className={classes.heading}>Get In Touch</h1>
         <div  className={classes.blogcontainer}>
             <div>
                 <h3 className={classes.headingtwo}>Lets talk about Everything!</h3>
                 <p className={classes.text}>Dont like forms? Send me an Email</p>
             </div>
             <div className={classes.con}>
                 <div>
                     <input placeholder="Your Name" className={classes.field}></input>
                     <input   placeholder="Email" className={classes.field}></input>
                </div>
                <div className={classes.conone}>
                <input   placeholder="Email" className={classes.sub}></input>
                <input   placeholder="Message here" className={classes.msg}></input>
                <Button className={classes.btn} variant="contained" color="secondary">Submit</Button>
                </div>
             </div>
            </div>
     </div>)
  }