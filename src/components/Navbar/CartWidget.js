import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

/*--------------------Material UI--------------------*/
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
/*--------------------Material UI--------------------*/


const CartWidget = () => {
  const { navQuantity } = useContext(CartContext);
 
  return (
    <IconButton to="/cart" aria-label="Show cart items" color="inherit">
      { navQuantity > 0 && <Badge badgeContent={navQuantity} color="secondary">
        <ShoppingCart />
      </Badge>}
     
    </IconButton>
  );
};

export default CartWidget;
