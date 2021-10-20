import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Cta from "../ConditionalComponents/CTA/Cta";
import useStyles from "./styles";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,Box
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

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
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
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
            <Alert severity="error">Seleccione la cantidad</Alert>
          )}
          {/*-----Out of stock-----*/}
          {itemDetail.stock === 0 && (
            <Box mt={1}>
            <Alert severity="error">Producto Agotado</Alert>
            </Box>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
