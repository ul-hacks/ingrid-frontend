import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Typography,
  Grid
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';


function ExtensionModal({ classes, setOpenModal, openModal }) {

  return (
    <>
      {openModal &&
        (<div className={classes.whiteBg}>
          <IconButton className={classes.closeButton}>
            <CloseIcon onClick={() => setOpenModal(false)} />
          </IconButton>

          <Grid container>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={8}>

            </Grid>
          </Grid>
        </div>)
      }
    </>
  )
}

ExtensionModal.propTypes = {
  classes: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired
}

export default withStyles(styles)(ExtensionModal);