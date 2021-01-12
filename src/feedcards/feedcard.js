import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const useStyles = makeStyles({
    root: props => ({
        display: 'flex',
        marginLeft: 25,
    }),
    heading : {
        fontWeight: 800,
        fontSize: 16,
        color: 'white',
        marginLeft: 20,
        margin: '0px 0px',
        padding: '10px 0px'
    },
    feedcontainer: {
        height: 700,
        width: 500,
        margin: '25px 25px',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '15px 15px',
        border: '10px solid yellow'
    }
  });

  export default function Feedcard(props) {
   
    const classes = useStyles(props);
    console.log(props.background)

    return (<div className={classes.feedcontainer}>{props.fed}{props.follow}
    </div>);
  }