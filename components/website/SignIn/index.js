import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';


function SignIn({ classes }) {

  return (
    <Grid container className={classNames(classes.container, classes.fullScreen)}>
    </Grid>
  )
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignIn);