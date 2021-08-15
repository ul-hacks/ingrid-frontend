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
  Slide,
  Collapse,
  Input,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ExistCard({ classes, extension, deleteMode, removeExtension }) {
  const { name, category, image } = extension;
  return (
    <Paper className={classes.cardPaper}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <img style={{ height: '50px', boxShadow: '0px 5px 11px 0px rgba(0,0,0,0.1)' }} src={`/static/images/${image}`} />
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

function AddCard({ classes, extension, addExtension, setUsername, username }) {
  const { name, category, placeholder, image } = extension;
  const [inputOpen, setInputOpen] = useState(false);

  const onSubmit = () => {
    addExtension();
  }

  return (
    <Paper className={classes.cardPaper}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <img style={{ height: '50px', boxShadow: '0px 5px 11px 0px rgba(0,0,0,0.1)' }} src={`/static/images/${image}`} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="text"
            className={classes.addButton}
            startIcon={<AddCircleIcon />}
            onClick={() => setInputOpen(prev => !prev)}
          >
            Connect
          </Button>
        </Grid>
        <Grid container>
          <Collapse in={inputOpen} style={{ width: '100%' }}>
            <Grid container item xs={12} alignItems="center">
              <Typography variant="subtitle1" style={{ marginTop: '16px' }}>{`${name} Username`}</Typography>
              <Grid item xs={10}>
                <Input style={{ width: '100%' }} alue={username} onChange={(e) => setUsername(e.target.value)} value={username} placeholder={placeholder} />
              </Grid>
              <Grid item xs={2}>
                <IconButton className={classes.acceptButton}><CheckCircleIcon onClick={onSubmit} /></IconButton>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </Paper>
  )
}

AddCard.propTypes = {
  classes: PropTypes.object.isRequired,
  extension: PropTypes.object.isRequired,
  addExtension: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired
}


function ExtensionModal({ classes, setOpenModal, openModal }) {
  const ALL_EXTENSIONS = [
    {
      name: 'Duolingo',
      category: 'tech',
      placeholder: 'username@password',
      image: 'duolingo.png'
    },
    {
      name: 'Github',
      category: 'tech',
      placeholder: 'username',
      image: 'github.png'
    },
    {
      name: 'Gitlab',
      category: 'tech',
      placeholder: 'username',
      image: 'gitlab.png'
    },
  ];

  const existing = [

  ]
  const add = ALL_EXTENSIONS.filter(el => existing.every(el2 => el2.name !== el1.name)); // doesnt matter content of object as long as name matches

  const [deleteMode, setDeleteMode] = useState(false);
  const [existingExtensions, setExistingExtensions] = useState(existing);
  const [shopExtensions, setShopExtensions] = useState(add);
  const [usernames, setUsernames] = useState({ Duolingo: '', Github: '', Gitlab: '' });

  const saveUsername = (name, e) => {
    const newUsernames = { ...usernames };
    newUsernames[name] = e;
    setUsernames(newUsernames);
  }


  const onClose = () => {
    /***
     * SAVE DATA HERE, usersnames['Duolingo'] = duolingo, usersnames['Github'] = github etc.
     * Added extensions = existingExtensions
     */
    setOpenModal(false);
  }


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
            <CloseIcon onClick={onClose} />
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
                    <AddCard extension={extension} classes={classes} addExtension={() => addExtension(extension)}
                      username={usernames[extension.name]}
                      setUsername={(e) => saveUsername(extension.name, e)}
                    />
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