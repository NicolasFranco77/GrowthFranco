import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
/*--------------------Material UI--------------------*/
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles.js";
/*--------------------Material UI--------------------*/

const CartItem = ({ item, setCantidad }) => {
  const classes = useStyles();

  /*--------------------CartContext-------------------*/
  const {
    removeItem,
    changeNavQuantity,
    navQuantity,
    changeQuantity,
    quantity,
  } = useContext(CartContext);
  /*--------------------CartContext-------------------*/

  const handleOnClick = () => {
    removeItem(item.id);
    changeQuantity(quantity - item.quantity);
    changeNavQuantity(navQuantity - item.quantity);
  };

  return (
    <Card>
      <CardMedia
        image={item.pictureUrl}
        alt={item.title}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.title}</Typography>

        {/*--------------------Product Total Price-------------------*/}
        <Typography variant="h5">
          ${Number(item.price) * Number(item.quantity)}
        </Typography>
        {/*--------------------Product Total Price-------------------*/}
      </CardContent>

      <CardActions className={classes.cardActions}>
        {/*--------------------Product Quantity-------------------*/}
        <div className={classes.buttons}>
          {/* <Button type="button" size="small" onClick={item.quantity - 1}>
            -
          </Button> */}
          <Typography>{`Cantidad: ${item.quantity}    `}</Typography>
          {/* <Button type="button" size="small" onClick={() => setCantidadItem(Number(item.quantity) + 1)}>
            +
            </Button> */}
        </div>
        {/*--------------------Product Quantity-------------------*/}

        {/*--------------------Remove Button-------------------*/}
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
