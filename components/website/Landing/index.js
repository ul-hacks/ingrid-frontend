import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Container,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';


function Landing({ classes }) {
  const points = [
    {
      text: 'An all-in-one dashboard to track your personal learning.'
    },
    {
      text: 'Easily customizable to suit your needs. We offer variety of extensions to track the data you want.'
    },
    {
      text: 'Cool badges and streaks to motivate yourself to keep going'
    },
  ];


  return (
    <Grid container className={classNames(classes.container, classes.fullScreen)}>
      <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
        <img className={classes.image} src={'/static/images/landing-graphic.png'} />
      </Grid>
      <Grid item xs={12} md={6} container alignContent="center">
        <Grid item xs={12}>
          <Typography variant="h1">A new way to track education</Typography>
        </Grid>
        {points.map((point) => (
          <Grid item xs={12}>
            <Typography variant="body1">• {point.text}</Typography>
          </Grid>
        ))}
        <Grid container alignItems="center" style={{ marginTop: '24px'}}>
          <a href='/signup' className={classes.no_u} style={{ marginRight: '24px'}}><Button variant="contained" disableRipple>Sign Up</Button></a>
          <a href='/signin' className={classes.no_u}><Button variant="outlined" disableRipple>Sign In</Button></a>
        </Grid>
      </Grid>
    </Grid>
  )
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Landing);