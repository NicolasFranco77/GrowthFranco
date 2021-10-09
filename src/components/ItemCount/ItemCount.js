import React from "react";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const ItemCount = ({ stock, initial, onAdd, item, setNotification }) => {
  const [count, setCount] = useState(initial);
  const {
    quantity,
    isInCart,
    addItem,
    changeQuantity,
    getProduct,
    changeNavQuantity,
  } = useContext(CartContext);
  /*-------Material UI-------*/
  const classes = useStyles();

  /*--Get item Quantity--*/
  useEffect(() => {
    if (isInCart(item.id)) {
      const oldQuantity = getProduct(item.id)?.quantity;
      setCount(oldQuantity);
    }
    return () => {
      setCount(0);
    };
  }, [item]);

  /*-----Count +1-----*/
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
      changeQuantity(quantity + 1);
    }
  };

  /*-----Count -1-----*/
  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
      changeQuantity(quantity - 1);
    }
  };

  /*-----Add to cart action-----*/
  const handleOnClick = () => {
    if (count) {
      setNotification(false);
      addItem(item, count);
      changeQuantity(quantity);
      changeNavQuantity(quantity);
      onAdd();
    } else {
      setNotification(true);
    }
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
