import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Container,
  Paper,
  Input,
  Button,
  Divider,
  FormControl,
  FormHelperText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

function SignIn({ classes }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
  }

  return (
    <Grid container>
      <Paper className={classes.paperCard}>
        <Grid container direction="row" className={classes.inputLabel} justifyContent="center" alignItems="center">
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.header}>
                Sign In
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
            <Typography variant="subtitle1">
              Username
            </Typography>
            <Input disabled={submitted} className={classes.input} value={username} onChange={(e) => setUsername(e.target.value)} />
            <Typography variant="subtitle1">
              Password
            </Typography>
            <Input disabled={submitted} className={classes.input} inputProps={{ type: "password" }} value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Button variant="contained" onClick={onSubmit} disableRipple>Sign In</Button>
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="body1"><a className={classes.link} href='/signup'>New? Sign up here</a></Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignIn);