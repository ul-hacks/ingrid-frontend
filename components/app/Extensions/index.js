import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Typography,
  Grid,
  Paper,
  Container,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function ExistCard({ classes, extension }) {
  const { name, category } = extension;
  return (
    <Paper className={classes.cardPaper}>
      <Grid container>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

ExistCard.propTypes = {
  classes: PropTypes.object.isRequired,
  extension: PropTypes.object.isRequired
}

function AddCard({ classes, extension }) {
  const { name, category } = extension;

  return (
    <Paper className={classes.cardPaper}>
      <Grid container alignItems="center">
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="text"
            className={classes.button}
            startIcon={<AddCircleIcon />}
          >
            Connect
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

AddCard.propTypes = {
  classes: PropTypes.object.isRequired,
  extension: PropTypes.object.isRequired
}


function ExtensionModal({ classes, setOpenModal, openModal }) {
  const existing = [
    {
      name: 'Github',
      category: 'tech',
    },
  ]
  const add = [
    {
      name: 'Scratch',
      category: 'tech',
    },
  ]

  return (
    <>
      {openModal &&
        (<div className={classes.whiteBg}>
          <IconButton className={classes.closeButton}>
            <CloseIcon onClick={() => setOpenModal(false)} />
          </IconButton>

          <Container>
            <Grid container maxWidth="lg">
              <Grid item xs={4} className={classes.greyDiv}>
                {existing.map((extension) => (
                  <ExistCard extension={extension} classes={classes} />
                ))}
              </Grid>
              <Grid item xs={8} className={classes.greyDiv}>
                {add.map((extension) => (
                  <AddCard extension={extension} classes={classes} />
                ))}
              </Grid>
            </Grid>
          </Container>
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