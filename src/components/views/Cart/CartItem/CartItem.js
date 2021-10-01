import React, { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles.js";

const CartItem = ({ item, setCantidad }) => {
  const classes = useStyles();
  const [cantidadItem, setCantidadItem] = useState(item.quantity);
  const {
    removeItem,
    changeNavQuantity,
    navQuantity,
    changeQuantity,
    quantity,
    productsCart
  } = useContext(CartContext);

  const handleOnClick = () => {
    removeItem(item.id);
    changeQuantity(quantity - item.quantity);
    changeNavQuantity(navQuantity - item.quantity);
  };







  setCantidad(Number(item.price) * Number(item.quantity));

  return (
    <Card>
      <CardMedia
        image={item.pictureUrl}
        alt={item.title}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.title}</Typography>
        <Typography variant="h5">
          {" "}
          ${Number(item.price) * Number(item.quantity)}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          {/* <Button type="button" size="small" onClick={item.quantity - 1}>
            -
          </Button> */}
          <Typography>{`Cantidad: ${item.quantity}    `}</Typography>
          {/* <Button type="button" size="small" onClick={() => setCantidadItem(Number(item.quantity) + 1)}>
            +
            </Button> */}
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={handleOnClick}
        >
          Remover
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;