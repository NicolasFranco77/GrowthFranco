import React, { useState } from "react";
import { Paper, Typography, Step, StepLabel, Stepper } from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import Review from "../Review";
import ResultMessage from "../ResultMessage";

const Checkout = () => {
  const [user, setUser] = useState();
  const [steps, setSteps] = useState(0);
  const [result, setResult] = useState(undefined);

  /*-------Material UI-------*/
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={steps} sx={{ pt: 3, pb: 5 }}>
            <Step>
              <StepLabel>Datos de Envío</StepLabel>
            </Step>
            <Step>
              <StepLabel>Resumen de Compra</StepLabel>
            </Step>
          </Stepper>

          {!steps && <AddressForm setSteps={setSteps} setUser={setUser} />}
          {steps === 1 && (
            <Review
              user={user}
              setUser={setUser}
              setSteps={setSteps}
              setResult={setResult}
            />
          )}
          {steps === 2 && (
            <ResultMessage result={result} user={user} setUser={setUser} />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
