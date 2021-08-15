import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
import styles from "../SignIn/style";

function SignUp({ classes }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [empty, setEmpty] = useState([false, false]);

  const onSubmit = () => {
    let error = false;
    setSubmitted(true);
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

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      error = true;
    } else {
      setPasswordMatch(true);
    }

    if (error) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  };

  return (
    <Grid container>
      <Paper className={classes.paperCard}>
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
                Sign Up
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
              {empty[1] && (
                <FormHelperText
                  style={{ marginTop: 0, marginBottom: "16px" }}
                  error
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
                  style={{ marginTop: 0, marginBottom: "16px" }}
                  error
                >
                  Username must not be empty
                </FormHelperText>
              )}
            </FormControl>
            <Typography variant="subtitle1">Confirm Password</Typography>
            <FormControl style={{ width: "100%" }}>
              <Input
                error={!passwordMatch}
                disabled={submitted}
                error={!passwordMatch}
                className={classes.input}
                inputProps={{ type: "password" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!passwordMatch && (
                <FormHelperText
                  style={{ marginTop: 0, marginBottom: "16px" }}
                  error
                >
                  Passwords don't Match
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Button variant="contained" onClick={onSubmit} disableRipple className={classes.button}>
            Sign Up
          </Button>
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="body1">
              <a className={classes.link} href="/signin">
                Sign In
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);