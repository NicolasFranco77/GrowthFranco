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
   
  

    return (
      <>
      <CardActions disableSpacing className={classes.cardActions2}>
       <Link style={{ textDecoration: "none" }} to="/">
        <Button  variant="contained" color="primary">
          Seguir comprando
        </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <Button variant="contained" color="secondary">
            Finalizar Compra
          </Button>
        </Link>
        </CardActions>
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
              <Typography variant="h5">${itemDetail.price}</Typography>
            </div>
            <Grid container justifyContent="center" spacing={4}>
              <img src={itemDetail.pictureUrl} alt="" />
            </Grid>
            <Typography variant="body2" color="textSecondary">
              {itemDetail.longDescription}
            </Typography>
          </CardContent>
          {cart ?
          <CardActions disableSpacing className={classes.cardActions}>
             
              <ItemCount
                stock={5}
                item={itemDetail}
                initial={0}
                onAdd={handleOnAdd}
                setItemCount={setItemCount}
              />
               </CardActions>
             : 
              <FinalizarCompra />
            }
         
        </Card>
      </Grid>
    </main>
  );
};

export default ItemDetail;
