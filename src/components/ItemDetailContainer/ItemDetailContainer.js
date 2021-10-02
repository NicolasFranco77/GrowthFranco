import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

/*--------------------Components--------------------*/
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../ConditionalComponents/Spinner/Spinner";
/*--------------------Components--------------------*/

/*--------------------Firebase--------------------*/
import { getProductsById } from "../../services/firebase/firebase";
/*--------------------Firebase--------------------*/

/*--------------------Material UI--------------------*/
import useStyles from "./styles";
/*--------------------Material UI--------------------*/


//COMPONENT
const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(undefined);
  const { title } = useParams();
  /*--------------------Material UI--------------------*/
  const classes = useStyles();
  /*--------------------Material UI--------------------*/

 /*--------------------Firebase Call--------------------*/
  useEffect(() => {
    getProductsById(title, setItemDetail);
  }, [title]);
 /*--------------------Firebase Call--------------------*/

 /*--------------------Spinner--------------------*/
  if (!itemDetail) {
    return <Spinner />;
  }
 /*--------------------Spinner--------------------*/

  return (
    <main>
      <div className={classes.toolbar} />
      <ItemDetail itemDetail={itemDetail} />
    </main>
  );
};

export default ItemDetailContainer;
