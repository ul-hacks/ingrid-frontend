import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Typography,
  Grid,
  Paper,
  Divider,
  Container,
  IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import HeatMap from 'react-heatmap-grid';
import SettingsIcon from '@material-ui/icons/Settings';

function ExtensionHeatMap({ classes }) {
  const xLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
  const yLabels = new Array(4).fill(0).map((_, i) => `${i}`);;
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

  console.log(data);
  return (
    <Grid className={classes.heatMap} item xs={12} md={6}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        cellStyle={(background, value, min, max, data, x, y) => ({ background: `rgba(128, 232, 111, ${1 - (max - value) / (max - min)})`, borderRadius: '5px', margin: '2px', width: '30px', height: '30px' })}
      />
    </Grid>
  );
}
ExtensionHeatMap.propTypes = {
  classes: PropTypes.object.isRequired,
}

function ExtensionCard({ classes, extension }) {
  const {
    name,
    category,
    weeklyActivity,
    totalActivity
  } = extension;

  const getImage = () => {
    if (name === 'Github') {
      return 'github.png'
    } else if (name === 'Gitlab') {
      return 'gitlab.png'
    } else {
      return 'duolingo.png'
    }
  }

  return (
    <Grid container className={classes.extensionCard} alignItems="center">
      <Grid item xs={4} container alignItems="center">
        <img style={{ height: '50px', boxShadow: '0px 5px 11px 0px rgba(0,0,0,0.1)', marginRight:'8px' }}
          src={`/static/images/${getImage()}`}
        />
        <Typography variant="subtitle1">{name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          className={classNames(category === 'tech' && classes.techPill, category === 'lang' && classes.langPill)}
        >{category}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{weeklyActivity}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{totalActivity}</Typography>
      </Grid>
    </Grid>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  extension: PropTypes.object.isRequired,
}

function Dashboard({ classes, user, setOpenModal }) {
  const {
    name,
    streak,
    extensions,
  } = user;

  return (
    <>
      <IconButton className={classes.settingsButton} onClick={() => setOpenModal(true)}>
        <SettingsIcon />
      </IconButton>
      <Container className={classes.fullScreen} maxWidth="lg">
        <div className={classes.header}>
          <Typography variant="h2">
            {`Welcome back ${name}!`}
            <Divider variant="middle" />
          </Typography>
        </div>
        <Grid>
          <Paper className={classes.topBar}>
            <Grid container>
              <Grid item xs={6} md={3} container alignItems="center">
                <img className={classes.fireEmoji} src={"/static/images/fire-emoji.png"} />
                <span className={classes.boldNumber}>{streak}</span><Typography variant="body1">days</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Paper className={classes.extensionPaper}>
                <Grid container className={classes.extensionCard}>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1">Name</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1">Category</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1">Weekly</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1">Total</Typography>
                  </Grid>
                </Grid>
                <Divider variant="middle" />
                {extensions.map((extension) => (
                  <ExtensionCard classes={classes} extension={extension} />
                ))}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.mapPaper}>
                <Grid container className={classes.mapContainer}>
                  <ExtensionHeatMap classes={classes} />
                  <ExtensionHeatMap classes={classes} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  setOpenModal: PropTypes.func.isRequired,
}

Dashboard.defaultProps = {
  user: {
    name: 'User',
    streak: 0,
    extensions: [],
  }
}
export default withStyles(styles)(Dashboard);