import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
/*--------------------Material UI--------------------*/
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
/*--------------------Material UI--------------------*/
/*--------------------Components--------------------*/
import CartItem from "./CartItem/CartItem";
/*--------------------Components--------------------*/



const Cart = () => {
  const classes = useStyles();
  const { productsCart, clear } = useContext(CartContext);
  

  const totalPrice = productsCart.map(
    (itemCart) => itemCart.price * itemCart.quantity
  );

  let total = totalPrice.reduce((a, b) => a + b, 0);

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {productsCart?.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>

            <CartItem item={item}/>

          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Total: ${total}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={clear}
          >
            Vaciar Carrito
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Pagar
          </Button>
        </div>
      </div>
    </>
  );

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Tu carrito está vacío,{" "}
      <Link to="/" className={classes.link}>
        agrega productos 
      </Link>
      !
    </Typography>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Carrito de Compras
      </Typography>
      {productsCart.length > 0 ? <FilledCart /> : <EmptyCart />}
    </Container>
  );
};

export default Cart;
