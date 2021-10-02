import React from "react";
import { Link } from "react-router-dom";

/*--------------------Material UI--------------------*/
import useStyles from "./styles";
import { CardActions, Button } from "@material-ui/core";

/*--------------------Material UI--------------------*/

const Cta = () => {
  /*--------------------Material UI--------------------*/
  const classes = useStyles();
  /*--------------------Material UI--------------------*/

  return (
    <>
      <CardActions disableSpacing className={classes.cardActions2}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="contained" color="primary">
            Seguir comprando
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <Button variant="contained" color="secondary">
            Finalizar Compra
          </Button>
        </Link>
      </CardActions>
    </>
  );
};

export default Cta;
