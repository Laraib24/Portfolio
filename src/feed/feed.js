import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Feedcard from '../feedcards/feedcard';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { TwitterTimelineEmbed,  TwitterFollowButton } from 'react-twitter-embed';
import Medium from '../medium/medium';


const useStyles = makeStyles({
    root: props=> ({
      backgroundColor: '#353353',
      marginTop: -40,
    }),
    feedcontainer: props=>({
      display: 'flex',
      backgroundColor: '#353353',
      marginLeft: 260
    }),
    heading: {
        color: 'white',
        fontSize: 50,
        fontWeight: 600,
        marginLeft: 300,
        marginBottom: 60,
    }
  })
 
  export default function Feed(props){
    const classes = useStyles(props);

     return(<div className={classes.root}>
         <h1 className={classes.heading}>Feed</h1>
         <div  className={classes.feedcontainer}>
         <Feedcard follow={<TwitterFollowButton screenName={'Laraib0304'} />} fed={<TwitterTimelineEmbed sourceType="profile" screenName="Laraib0304" options={{height: 650}} />}></Feedcard>
         <Feedcard follow={<Medium></Medium>}></Feedcard>
         </div>
     </div>)
  }