import React from 'react';
import {
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/masterTheme';

const useStyles = makeStyles((theme) => ({
  pink: {
    color: theme.palette.common.pink
  },
}));

function Dashboard() {
  const classes = useStyles();


  return (
    <div>
      <Typography variant="h1" className={classes.pink}>Hello</Typography>
    </div>
  )
}

export default Dashboard;