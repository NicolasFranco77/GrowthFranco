import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [cart, setCart] = useState(true);
  const [quantity, setQuantity] = useState();
  const classes = useStyles();

  //Desaparece el contador
  const handleOnAdd = () => {
    setCart(false);
    console.log(quantity)
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
                initial={1}
                onAdd={handleOnAdd}
                setQuantity={setQuantity}
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
