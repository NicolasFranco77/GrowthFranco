import React from "react";
import { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const classes = useStyles();

  const add = () => {
    if (count < stock) setCount(count + 1);
  };

  const subtract = () => {
    if (count > initial) setCount(count - 1);
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
      <Button variant="contained" size="small" type="button" color="secondary">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;