import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../ConditionalComponents/Spinner/Spinner";
import { getProductsById } from "../../services/firebase/firebase";
import useStyles from "./styles";
import { Button, Grid, Typography } from "@material-ui/core";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(undefined);
  const { title } = useParams();
  /*-------Material UI-------*/
  const classes = useStyles();

  /*------------Firebase Call------------*/
  useEffect(() => {
    getProductsById(title, setItemDetail);
  }, [title]);

  /*------Spinner------*/
  if (!itemDetail) {
    return <Spinner />;
  }

  /*if product doesn't exists*/
  if (!itemDetail.title) {
    return (
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ height: "50vh" }}
      >
        <Grid container justifyContent="center">
          <Typography gutterBottom variant="h4">
            {`"${itemDetail.id}" no está disponible.`}
          </Typography>
        </Grid>

        <Button component={Link} to="/" variant="outlined" color="primary">
          Ver Productos disponibles
        </Button>
      </Grid>
    );
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ItemDetail itemDetail={itemDetail} />
    </main>
  );
};

export default ItemDetailContainer;
