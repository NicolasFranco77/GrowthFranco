import React from "react";

/*--------------------Material UI--------------------*/
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
/*--------------------Material UI--------------------*/

/*--------------------Components--------------------*/
import AddressForm from "../AddressForm";
/*--------------------Components--------------------*/

const Checkout = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Datos de Envío
          </Typography>
          <AddressForm />
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
