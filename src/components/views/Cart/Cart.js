import React, {useContext, useState} from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem/CartItem"

const Cart = () => {
  const classes = useStyles();
  const {productsCart}  = useContext(CartContext);
  const {clear}  = useContext(CartContext);
  const [cantidad, setCantidad] = useState()





  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {productsCart?.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              setCantidad={setCantidad}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Total: $ {cantidad} (en contrucción 😬 )
        </Typography>
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
      Tu carrito está vacío,  
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
    {productsCart ? <FilledCart /> : <EmptyCart />  }
    
  </Container>
  )
}

export default Cart
