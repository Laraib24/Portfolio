import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebaritem from '../Sidebaritem/sidebaritem';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import HorizontalSplitOutlinedIcon from '@material-ui/icons/HorizontalSplitOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

const useStyles = makeStyles({
    sidebaritem: props=> ({
      display: 'flex',
      marginLeft: 270,
    }),
    sidebarcontainer: props=>({
      display: 'flex',
      position: 'fixed',
      flexDirection: 'column',
      backgroundColor: '#353353',
      width: 270,
      height: 657,
      borderRight: '2px dashed grey',
    }),
    heading: {
        color: 'white',
        fontSize: 50,
        fontWeight: 800,
        marginLeft: 30,
        marginBottom: 100,
    }
  })
  export default function Sidebar(props){
    const classes = useStyles(props);

     return(<div className={classes.sidebarcontainer}>
         <h1 className={classes.heading}>Bolby.</h1>
         <Sidebaritem icon={<HomeOutlinedIcon />} h3='Home'></Sidebaritem>
         <Sidebaritem  icon={<InfoOutlinedIcon />} h3='About'></Sidebaritem>
         <Sidebaritem  icon={<WorkOutlineOutlinedIcon />} h3='Services'></Sidebaritem>
         <Sidebaritem  icon={<StarOutlineOutlinedIcon />} h3='Feed'></Sidebaritem>
         <Sidebaritem  icon={<HorizontalSplitOutlinedIcon />} h3='Works'></Sidebaritem>
         <Sidebaritem  icon={<BorderColorOutlinedIcon />} h3='Blog'></Sidebaritem>
         <Sidebaritem  icon={<ForumOutlinedIcon />} h3='Contact'></Sidebaritem>
     </div>)
  }