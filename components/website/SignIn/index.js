import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Router from 'next/router';
import {
  Grid,
  Typography,
  Container,
  Paper,
  Input,
  Button,
  Divider,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";

function SignIn({ classes }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [empty, setEmpty] = useState([false, false]);

  useEffect(() => {
    if (localStorage.getItem('session') === 'true') {
      Router.push('/app');
    }
  });

  const onSubmit = () => {
    let error = false;
    const newEmpty = [...empty];
    if (username === "") {
      newEmpty[0] = true;
      error = true;
    } else {
      newEmpty[0] = false;
    }
    if (password === "") {
      newEmpty[1] = true;
      error = true;
    } else {
      newEmpty[1] = false;
    }

    setEmpty(newEmpty);
    if (error) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    localStorage.setItem('session', 'true');
  };

  return (
    <Grid container>
      <Paper className={classes.paperCard}>
        <a href='/'>
          <img src={'/static/images/ingrid-logo.png'} className={classes.logo} />
        </a>
        <Grid
          container
          direction="row"
          className={classes.inputLabel}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.header}>
                Sign In
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
            <Typography variant="subtitle1">Username</Typography>
            <FormControl style={{ width: "100%" }}>
              <Input
                error={empty[0]}
                disabled={submitted}
                className={classes.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {empty[0] && (
                <FormHelperText
                  error
                  style={{ marginTop: 0, marginBottom: "16px" }}
                >
                  Username must not be empty
                </FormHelperText>
              )}
            </FormControl>
            <Typography variant="subtitle1">Password</Typography>
            <FormControl style={{ width: "100%" }}>
              <Input
                error={empty[1]}
                disabled={submitted}
                className={classes.input}
                inputProps={{ type: "password" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {empty[1] && (
                <FormHelperText
                  error
                  style={{ marginTop: 0, marginBottom: "16px" }}
                >
                  Password must not be empty
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Button
            variant="contained"
            onClick={onSubmit}
            disableRipple
            className={classes.button}
          >
            Sign In
          </Button>
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="body1">
              <a className={classes.link} href="/signup">
                New? Sign up here
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);