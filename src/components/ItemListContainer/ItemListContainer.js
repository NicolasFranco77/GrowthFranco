import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Grid } from "@material-ui/core";
import useStyles from "./styles";

import ItemList from "../ItemList/ItemList";

import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


//Spinner
const { CircularProgress } = require("@material-ui/core");




//COMPONENTE
const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { category } = useParams();
  const classes = useStyles();

//Renderiza las ofertas o todos los productos
 useEffect(() => {

  //Renderiza las ofertas
  if (category === "ofertas" ) {

    getDocs(query(collection(db, 'products'), where('oferta', '==', true))).then((querySnapshot) => {
      const products = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
      }) 

     
      setListProducts(products);
      
      
    });
    return () => {
      setListProducts(undefined);
    };
  }else{
    
    getDocs(collection(db, 'products')).then((querySnapshot) => {
      const products = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        }) 
        setListProducts(products);
      });
      return () => {
        setListProducts(undefined);
      };

  }
  //Renderiza todos los productos
    

}, [category]);

  
  useEffect(() => {
    //Renderiza las categorías
    if (category === "proteinas" || category === "shakers"  ) {
      getDocs(query(collection(db, 'products'), where('category', '==', category))).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        }) 

       
        setListProducts(products);
      });
      return () => {
        setListProducts(undefined);
      };
    }
  }, [category]);

  //Spinner
  if (listProducts === undefined || listProducts.length === 0) {
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
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ItemList listProducts={listProducts} />
    </main>
  );
};

export default ItemListContainer;


