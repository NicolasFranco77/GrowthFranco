import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { productsCart, getPrice } = useContext(CartContext);
  /*-----Material UI ----- */
  const classes = useStyles();

  useEffect(() => {
    getPrice();
  }, [getPrice]);

  return (
    <Container>
      <div className={classes.toolbar} />

      <Typography className={classes.title} variant="h3" gutterBottom>
        Carrito de Compras
      </Typography>
      {productsCart?.length > 0 ? <FilledCart /> : <EmptyCart />}
    </Container>
  );
};

export default Cart;
