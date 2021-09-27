import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import useStyles from "./styles";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

import ItemCount from "../ItemCount/ItemCount";

//COMPONENTE
const ItemDetail = ({ itemDetail }) => {
  const { quantity, addItem, isInCart } = useContext(CartContext);
  const [cart, setCart] = useState(true);
  const [itemCount, setItemCount] = useState();

  const classes = useStyles();

  //Desaparece el contador

  const handleOnAdd = () => {
    setCart(false);
  };

  //Componente condicional
  const FinalizarCompra = () => {
    //Aparece el carritto
    const handleOnClick = () => {
      setCart(true);
    };

    return (
      <>
        <Button onClick={handleOnClick} variant="contained">
          Volver
        </Button>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <Button variant="contained" color="secondary">
            Finalizar Compra
          </Button>
        </Link>
      </>
    );
  };

  //RETURN DEL COMPONENTE PRINCIPAL
  return (
    <main className={classes.content}>
      <Grid container justifyContent="center" spacing={4}>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                {itemDetail.title}
              </Typography>
              <Typography variant="h5">{itemDetail.price}</Typography>
            </div>
            <Grid container justifyContent="center" spacing={4}>
              <img src={itemDetail.pictureUrl} alt="" />
            </Grid>
            <Typography variant="body2" color="textSecondary">
              {itemDetail.description}
            </Typography>
          </CardContent>

          <CardActions disableSpacing className={classes.cardActions}>
            {cart ? (
              <ItemCount
                stock={5}
                item={itemDetail}
                initial={0}
                onAdd={handleOnAdd}
                setItemCount={setItemCount}
              />
            ) : (
              <FinalizarCompra />
            )}
          </CardActions>
        </Card>
      </Grid>
    </main>
  );
};

export default ItemDetail;
