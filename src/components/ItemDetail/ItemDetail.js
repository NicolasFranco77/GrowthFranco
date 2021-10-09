import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Cta from "../ConditionalComponents/CTA/Cta";
import useStyles from "./styles";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

const ItemDetail = ({ itemDetail }) => {
  const [cart, setCart] = useState(true);
  const [notification, setNotification] = useState(false);

  /*-------Material UI-------*/
  const classes = useStyles();

  /*Count or Call to action*/
  const handleOnAdd = () => {
    setCart(false);
  };

  return (
    <main className={classes.content}>
      <Grid container justifyContent="center" spacing={4}>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.cardContent}>
              {/*----------------Title-------------*/}
              <Typography variant="h5" gutterBottom>
                {itemDetail.title}
              </Typography>

              {/*-----------------------Price-----------------------*/}
              <Typography variant="h5">${itemDetail.price}</Typography>
            </div>

            {/*--------------------Image--------------------*/}
            <Grid container justifyContent="center" spacing={4}>
              <img src={itemDetail.pictureUrl} alt="" />
            </Grid>

            {/*---------------Long description---------------*/}
            <Typography variant="body2" color="textSecondary">
              {itemDetail.longDescription}
            </Typography>
          </CardContent>
          {/*-------------------Count or Call to action-------------------*/}
          {cart ? (
            <CardActions disableSpacing className={classes.cardActions}>
              <Typography variant="button">
                En Stock: {itemDetail.stock}
              </Typography>
              <ItemCount
                setNotification={setNotification}
                stock={itemDetail.stock}
                item={itemDetail}
                initial={0}
                onAdd={handleOnAdd}
              />
            </CardActions>
          ) : (
            <Cta />
          )}
          {/*---do not add 0 products---*/}
          {notification && (
            <Typography
              className={classes.cardActions}
              color="secondary"
              variant="button"
            >
              Seleccione la cantidad
            </Typography>
          )}
          {/*-----Out of stock-----*/}
          {itemDetail.stock === 0 && (
            <Typography
              className={classes.cardActions}
              color="secondary"
              variant="button"
            >
              Producto Agotado
            </Typography>
          )}
        </Card>
      </Grid>
    </main>
  );
};

export default ItemDetail;
