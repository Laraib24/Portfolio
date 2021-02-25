import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Feedcard from '../feedcards/feedcard';
import { TwitterTimelineEmbed,  TwitterFollowButton } from 'react-twitter-embed';
import axios from "axios";



const useStyles = makeStyles({
    root: props=> ({
      backgroundColor: '#353353',
      marginTop: -29
    }),
    feedcontainer: props=>({
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#353353',
    }),
    heading: {
        color: 'white',
        marginLeft: 10,
        fontSize: 42
    },
    medium: {
      borderBottom: '2px solid grey',
      padding: '5px 5px'
    },
    img: {
      width: 120,
      marginLeft: 150
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  })
 
  export default function Feed(props){
    const classes = useStyles(props);
    const [medium, setMedium] = React.useState(undefined)
    const [loading, setLoading] = React.useState(false)

    const api = React.useCallback(async () => {
      setLoading(true)
try {
		const mediumRssFeed = "https://medium.com/feed/@laraib-13562";
		const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
		const data = { params: { rss_url: mediumRssFeed } };
		
    const resp = await axios.get(rssToJsonApi, data)
    setMedium(resp.data)
    console.log("data", resp.data)
    setLoading(false)
    
	} catch (error) {
    setLoading(false)
		console.error(error);
	}
    }, [])

    React.useEffect(() => {
      api()
    }, [api])

     return(<div id="feed" className={classes.root}>
         <h1 className={classes.heading}>Feed</h1>
         <div  className={classes.feedcontainer}>
         <Feedcard follow={<TwitterFollowButton screenName={'Laraib0304'} />} fed={<TwitterTimelineEmbed sourceType="profile" screenName="Laraib0304" options={{height: 650}} />}></Feedcard>
         <Feedcard  follow={loading ?  <p>Loading...</p> : <div>
         {medium && medium.items.length ? medium.items.map(item => (
           <p className={classes.medium}> <a className={classes.link} href={item.link}><img className={classes.img}  src={item.thumbnail}/> <br /> <b>{item.title}</b></a> <br/> by <i>{item.author} <br /> {item.pubDate}</i></p>
         )) : null } 
         </div>}></Feedcard>
         </div>
     </div>)
}
  