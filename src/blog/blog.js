import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Blogcard from '../blogcard/blogcard';


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
    }
  })
 
  export default function Blog(props){
    const classes = useStyles(props);

     return(<div id="blog" className={classes.root}>
         <h1 className={classes.heading}>Blog</h1>
         <div  className={classes.blogcontainer}>
             <Blogcard image={'https://jthemes.net/themes/html/bolby/demo/images/blog/1.svg'}></Blogcard>
             <Blogcard image={'https://jthemes.net/themes/html/bolby/demo/images/blog/2.svg'}></Blogcard>
             <Blogcard image={'https://jthemes.net/themes/html/bolby/demo/images/blog/3.svg'}></Blogcard>
         </div>
     </div>)
  }