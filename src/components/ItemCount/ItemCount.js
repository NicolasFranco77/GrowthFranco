import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.js";

import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

//COMPONENTE
const ItemCount = ({ stock, initial, onAdd, setItemCount, item }) => {
  const [count, setCount] = useState(initial);
  const { quantity, changeQuantity, addItem, productsCart, setProductsCart } =
    useContext(CartContext);

  const classes = useStyles();

  setItemCount(count);

  //Suma 1 al carrito
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
      changeQuantity(quantity + 1);
    }
  };

  //Resta 1 al carrito
  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
      changeQuantity(quantity - 1);
    }
  };

  const handleOnClick = () => {
    const productsCartId = productsCart?.map(item=> item.id)

  if (productsCartId?.includes(item.id)) {
  const updateCart = productsCart?.map (i => {
      if (i.id === item.id){
     
        let oldQuantity = i.quantity
        return{
          ...i,
          quantity: count + oldQuantity
        }
      }else{
        return i
      }
  })
  setProductsCart(updateCart)
  }  else{const newProduct = {
    ...item,
    quantity: count,
  };

  productsCart
    ? addItem([...productsCart, newProduct])
    : addItem([newProduct]);
} 

  
    onAdd();
  };

  return (
    <div>
      <div className={classes.buttons}>
        <Button type="button" size="small" onClick={subtract}>
          -
        </Button>
        <Typography>{count}</Typography>
        <Button type="button" size="small" onClick={add}>
          +
        </Button>
      </div>
      <Button
        onClick={handleOnClick}
        variant="contained"
        size="small"
        type="button"
        color="secondary"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
