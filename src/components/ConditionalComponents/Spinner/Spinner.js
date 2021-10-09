import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

const { CircularProgress } = require("@material-ui/core");

const Spinner = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center">
        <CircularProgress color="secondary" />
      </Grid>
    </>
  );
};

export default Spinner;
