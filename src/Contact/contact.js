import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';


const useStyles = makeStyles({
    root: props=> ({
      backgroundColor: '#353353',
      marginTop: -40,
      height: 650
    }),
    blogcontainer: props=>({
      display: 'flex',
      backgroundColor: '#353353',
      marginLeft: 275,
      marginTop: 100
    }),
    heading: {
        color: 'white',
        fontSize: 50,
        fontWeight: 600,
        marginLeft: 300,
    },
    headingtwo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 700
    },
    text: {
        color: 'white',
        fontWeight: 600,
        fontSize: 14

    },
    field: {
        backgroundColor: 'white',
        borderRadius: 40,
        outline: 'none',
        border: 'none',
        width: 310,
        height: 50,
        margin: '10px 10px'
    },
    sub: {
        width: 650,
        height: 50,
        marginLeft: 10,
        outline: 'none',
        border: 'none',
        borderRadius: 40,
        marginTop: 30,
        marginBottom: 30
    },
    msg: {
        width: 650,
        height: 250,
        marginLeft: 10,
        outline: 'none',
        border: 'none',
        borderRadius: 40,
        marginBottom: 30
    },
    con: {
        marginLeft: 200
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
                <input   placeholder="Email" className={classes.sub}></input>
                <input   placeholder="Message here" className={classes.msg}></input>
             </div>
            </div>
     </div>)
  }