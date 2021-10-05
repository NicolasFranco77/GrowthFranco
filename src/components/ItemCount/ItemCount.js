import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext.js";
/*--------------------Material UI--------------------*/
import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

//COMPONENT
const ItemCount = ({ stock, initial, onAdd, item, setNotification}) => {
  const [count, setCount] = useState(initial);

  /*--------------------Material UI--------------------*/
  const classes = useStyles();

  /*--------------------Cart Context--------------------*/
  const { quantity, changeQuantity, isInCart, changeNavQuantity } =
    useContext(CartContext);

  /*--------------------Count +1----------------------*/
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
      changeQuantity(quantity + 1);
    }
  };

  /*--------------------Count -1--------------------*/
  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
      changeQuantity(quantity - 1);
    }
  };

  /*--------------------Add to cart action--------------------*/
  const handleOnClick = () => {
    if (count) {
      setNotification(false)
      isInCart(item, count);
      changeQuantity(quantity);
      onAdd();
      changeNavQuantity(quantity);
    }else{
      setNotification(true)
    }
  };

  return (
    <div>
      <div className={classes.buttons}>
        {/*--------------------Subtract button--------------------*/}
        <Button type="button" size="small" onClick={subtract}>
          -
        </Button>
        {/*--------------------Subtract Button--------------------*/}

        {/*--------------------Count--------------------*/}
        <Typography>{count}</Typography>
        {/*--------------------Count--------------------*/}

        {/*--------------------Add Button--------------------*/}
        <Button type="button" size="small" onClick={add}>
          +
        </Button>
        {/*--------------------Add Button--------------------*/}
      </div>

      {/*--------------------Add to cart Button--------------------*/}
      <Button
        onClick={handleOnClick}
        variant="contained"
        size="small"
        type="button"
        color="secondary"
      >
        Agregar al carrito
      </Button>
      {/*--------------------Add to cart Button--------------------*/}
    </div>
  );
};

export default ItemCount;
