import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

/*--------------------Components--------------------*/
import ItemList from "../ItemList/ItemList";
import Spinner from "../ConditionalComponents/Spinner/Spinner";
/*--------------------Components--------------------*/

/*--------------------Material UI--------------------*/
import useStyles from "./styles";
/*--------------------Material UI--------------------*/


/*--------------------Firebase--------------------*/
import {
  getAllProducts,
  getOffers,
  getProductsByCagetegory,
} from "../../services/firebase/firebase";
/*--------------------Firebase--------------------*/

//COMPONENT
const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState(undefined);
  const { category } = useParams();
  /*--------------------Material UI--------------------*/
  const classes = useStyles();
  /*--------------------Material UI--------------------*/

  /*--------------------Firebase Call--------------------*/
  useEffect(() => {
    if (category === "ofertas") {
      getOffers(setListProducts);
    } else if (category === "proteinas" || category === "shakers") {
      getProductsByCagetegory(setListProducts, category);
    } else {
      getAllProducts(setListProducts);
    }
  }, [category]);
  /*--------------------Firebase Call--------------------*/

  /*--------------------Spinner--------------------*/
  if (listProducts?.length === 0 || listProducts === undefined) {
    return <Spinner />;
  }
  /*--------------------Spinner--------------------*/

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ItemList listProducts={listProducts} />
    </main>
  );
};

export default ItemListContainer;
