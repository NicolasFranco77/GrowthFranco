import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

import useStyles from "./styles";
import { Grid } from "@material-ui/core";

import { db } from "../../services/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

//Spinner
const { CircularProgress } = require("@material-ui/core");

//COMPONENTE
const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(undefined);
  const { title } = useParams();
  const classes = useStyles();

  //Simula llamada al servidor
  useEffect(() => {
    getDoc(doc(db, "products", title)).then((querySnapshot) => {
      const product = { id: querySnapshot.id, ...querySnapshot.data() };
      setItemDetail(product);
    });

    return () => {
      setItemDetail(undefined);
    };
  }, [title]);

  //Spinner
  if (!itemDetail) {
    return (
      <>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center">
          <CircularProgress color="secondary" />
        </Grid>
      </>
    );
  }

  return (
    <main>
      <div className={classes.toolbar} />
      <ItemDetail itemDetail={itemDetail} />
    </main>
  );
};

export default ItemDetailContainer;
