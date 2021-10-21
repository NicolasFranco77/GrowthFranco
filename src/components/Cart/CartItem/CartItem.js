import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles.js";

const CartItem = ({ item }) => {
  const classes = useStyles();

  const { removeItem } = useContext(CartContext);

  /*-----Remove Button -----*/
  const handleOnClick = () => {
    removeItem(item.id);
  };

  return (
    <Card>
      <CardMedia
        style={{ textDecoration: "none", color: "inherit" }}
        component={Link}
        to={`item/${item.id}/${item.title}`}
        image={item.pictureUrl}
        alt={item.title}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          style={{ textDecoration: "none", color: "inherit" }}
          component={Link}
          to={`item/${item.id}/${item.title}`}
          variant="h4"
        >
          {item.title}
        </Typography>

        {/*-----------Product Total Price-----------*/}
        <Typography variant="h5">
          ${Number(item.price) * Number(item.quantity)}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        {/*----------Product Quantity---------*/}
        <div className={classes.buttons}>
          <Typography>{`Cantidad: ${item.quantity}    `}</Typography>
        </div>

        {/*--Remove Button--*/}
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={handleOnClick}
        >
          Remover
        </Button>
        {/*--------------------Remove Button-------------------*/}
      </CardActions>
    </Card>
  );
};

export default CartItem;
