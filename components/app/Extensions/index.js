import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

function ExtensionModal({ classes }) {
  console.log(classes);
  return (
    <div>
      <Typography variant="h1" className={classes.pink}>Hello</Typography>
    </div>
  )
}

ExtensionModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ExtensionModal);