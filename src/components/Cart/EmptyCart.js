import React from "react";
import { Link } from "react-router-dom";
import {Typography} from "@material-ui/core";
import useStyles from "./styles";


const EmptyCart = () => {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1">
      Tu carrito está vacío,{" "}
      <Link to="/" className={classes.link}>
        agrega productos
      </Link>
      !
    </Typography>
  );
};

export default EmptyCart;
