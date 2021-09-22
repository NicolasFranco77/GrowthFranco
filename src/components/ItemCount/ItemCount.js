import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

//COMPONENTE
const ItemCount = ({ stock, initial, setQuantity, onAdd }) => {
  const [count, setCount] = useState(initial);
  const classes = useStyles();

  //Quantity es igual a Count
  useEffect(() => {
    setQuantity(count);
  }, [count]);

  //Suma 1 al carrito
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  //Resta 1 al carrito
  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleOnClick = () => {
    setQuantity(count);
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
