import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import Spinner from "../ConditionalComponents/Spinner/Spinner";
import useStyles from "./styles";
import { getProducts } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState();
  const { category } = useParams();
  /*-------Material UI-------*/
  const classes = useStyles();

  /*------------Firebase Call------------*/
  useEffect(() => {
    getProducts("category", "==", category)
      .then((products) => {
        setListProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setListProducts(undefined);
    };
  }, [category]);

  /*--------------------Spinner----------------------------------*/
  if (!listProducts || listProducts?.length === 0) {
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
