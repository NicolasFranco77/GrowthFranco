import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Carrito = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Typography variant="h4"> Carrito en construcción 😬  </Typography>
    </>
  );
};

export default Carrito;
