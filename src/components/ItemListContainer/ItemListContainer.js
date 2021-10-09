import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import Spinner from "../ConditionalComponents/Spinner/Spinner";
import useStyles from "./styles";
import { getProducts } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState(undefined);
  const { category } = useParams();
  /*-------Material UI-------*/
  const classes = useStyles();

  /*------------Firebase Call------------*/
  useEffect(() => {
    getProducts(setListProducts, category);
  }, [category]);

  /*--------------------Spinner----------------------------------*/
  if (listProducts?.length === 0 || listProducts === undefined) {
    return <Spinner />;
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ItemList listProducts={listProducts} />
    </main>
  );
};

export default ItemListContainer;
