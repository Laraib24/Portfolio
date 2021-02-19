import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) =>
  createStyles({
    root: {
      height: 7,
      borderRadius: 5,
      width: '80%'
    },
    colorPrimary: props => ({
      backgroundColor: 'white',
    }),
    bar: props => ({
      borderRadius: 5,
      background: props.background,
    }),
  }),
)(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  text: {
      color: 'white',
      fontSize: 14,
  },
  textcontainer: {
      display: 'flex',
      justifyContent:'space-around',
      flex:1,
      margin: 5
  }
});

export default function Statusbar(props) {
  const classes = useStyles(props);
  console.log(props.background)

  return (
    <div className={classes.root}>
        <div className={classes.textcontainer}>
        <h3 className={classes.text}>{props.heading}</h3><p className={classes.text}>{props.per}%</p></div>
      <BorderLinearProgress {...props} variant="determinate" value={props.per} />
    </div>
  );
}
