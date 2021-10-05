import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

/*--------------------Material UI--------------------*/
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
/*--------------------Material UI--------------------*/

/*--------------------Components--------------------*/
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";
/*--------------------Components--------------------*/

const Cart = () => {
  const classes = useStyles();
  const { productsCart, getPrice } = useContext(CartContext);

  getPrice();

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
