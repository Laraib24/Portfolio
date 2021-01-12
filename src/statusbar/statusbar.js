import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getThemeProps } from '@material-ui/styles';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 7,
      borderRadius: 5,
      width: 350
    },
    colorPrimary: {
      backgroundColor: 'white',
    },
    bar: props => ({
      borderRadius: 5,
      backgroundColor: 'blue',
    }),
  }),
)(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  text: {
      color: 'white',
      marginRight: 150,
      fontSize: 14,
  },
  textcontainer: {
      display: 'flex',
  }
});

export default function Statusbar(props) {
  const classes = useStyles(props);
  console.log(props.background)

  return (
    <div className={classes.root}>
        <div className={classes.textcontainer}>
        <h3 className={classes.text}>{props.heading}</h3><p className={classes.text}>{props.per}%</p></div>
      <BorderLinearProgress variant="determinate" value={props.per} />
    </div>
  );
}
