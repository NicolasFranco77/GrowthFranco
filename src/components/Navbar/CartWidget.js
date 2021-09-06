import React from 'react'
import {IconButton, Badge} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const CartWidget = () => {
    return (
        
           <IconButton to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton> 
    
    )
}

export default CartWidget
