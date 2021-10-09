import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const CartWidget = () => {
  const { navQuantity } = useContext(CartContext);

  return (
    <IconButton to="/cart" aria-label="Show cart items" color="inherit">
      <Badge badgeContent={navQuantity} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
