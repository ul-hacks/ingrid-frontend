import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IconButton,
  Typography,
  Grid,
  Paper,
  Container,
  Button,
  Slide
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';
import StorefrontIcon from '@material-ui/icons/Storefront';

function ExistCard({ classes, extension, deleteMode, removeExtension }) {
  const { name, category } = extension;
  return (
    <Paper className={classes.cardPaper}>
      <Grid container alignItems="center">
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        {deleteMode && (<Grid item xs={4}>
          <Button
            variant="text"
            className={classes.removeButton}
            startIcon={<RemoveCircleIcon />}
            onClick={removeExtension}
          >
            Remove
          </Button>
        </Grid>)}
      </Grid>
    </Paper>
  )
}

ExistCard.propTypes = {
  classes: PropTypes.object.isRequired,
  extension: PropTypes.object.isRequired,
  deleteMode: PropTypes.func.isRequired,
  removeExtension: PropTypes.func.isRequired,
}

function AddCard({ classes, extension, addExtension }) {
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
            className={classes.addButton}
            startIcon={<AddCircleIcon />}
            onClick={addExtension}
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
  extension: PropTypes.object.isRequired,
  addExtension: PropTypes.func.isRequired,
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


  const ALL_EXTENSIONS = [
    {
      name: 'Github',
      category: 'tech',
    },
    {
      name: 'Github',
      category: 'tech',
    },
  ];

  const [deleteMode, setDeleteMode] = useState(false);
  const [existingExtensions, setExistingExtensions] = useState(existing);
  const [shopExtensions, setShopExtensions] = useState(add);

  const removeExtension = (extension) => {
    let newExisting = [...existingExtensions];
    newExisting = newExisting.filter((ext) => ext.name !== extension.name);
    setExistingExtensions(newExisting);
    setShopExtensions([...shopExtensions, extension]);
  }

  const addExtension = (extension) => {
    let newShop = [...shopExtensions];
    newShop = newShop.filter((ext) => ext.name !== extension.name);
    setShopExtensions(newShop);
    setExistingExtensions([...existingExtensions, extension]);
  }

  return (
    <>
      <Slide in={openModal} direction="down">
        <div className={classes.whiteBg}>
          <IconButton className={classes.closeButton}>
            <CloseIcon onClick={() => setOpenModal(false)} />
          </IconButton>
          <Container maxWidth="lg" className={classes.fullScreen}>
            <Grid container>
              <Grid item xs={12} md={5} className={classes.greyContainer}>
                <Grid container alignItems="center" justify="space-between">
                  <Typography>My Extensions</Typography>
                  <IconButton>
                    <EditIcon onClick={() => setDeleteMode(prev => !prev)} />
                  </IconButton>
                </Grid>
                <div className={classes.greyDiv}>
                  {existingExtensions.map((extension) => (
                    <ExistCard 
                    extension={extension}
                    classes={classes}
                    deleteMode={deleteMode}
                    removeExtension={() => removeExtension(extension)} />
                  ))}
                </div>
              </Grid>
              <Grid item xs={12} md={7} className={classes.greyContainer}>
                <Grid container alignItems="center" justify="space-between">
                  <Typography className={classes.shopText}>Extension Shop</Typography>
                  <IconButton disabled>
                    <StorefrontIcon className={classes.storeIcon} />
                  </IconButton>
                </Grid>
                <div className={classes.greyDiv}>
                  {shopExtensions.map((extension) => (
                    <AddCard extension={extension} classes={classes} addExtension={() => addExtension(extension)}/>
                  ))}
                </div>

              </Grid>
            </Grid>
          </Container>
        </div>
      </Slide>
    </>
  )
}

ExtensionModal.propTypes = {
  classes: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired
}

export default withStyles(styles)(ExtensionModal);