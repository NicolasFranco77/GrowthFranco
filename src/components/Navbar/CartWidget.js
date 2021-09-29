import React, { useContext } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { CartContext } from "../Context/CartContext";

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
