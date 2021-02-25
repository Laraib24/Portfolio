import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Blogcard from '../blogcard/blogcard';


const useStyles = makeStyles({
    root: props=> ({
      backgroundColor: '#353353',
      height: '100%',
      marginTop: -29,
      paddingBottom: 50 ,
    }),
    blogcontainer: props=>({
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#353353',
    }),
    heading: {
        color: 'white',
        fontSize: 42,
        marginLeft: 10
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