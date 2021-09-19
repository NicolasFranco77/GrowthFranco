import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Grid } from "@material-ui/core";
import useStyles from "./styles";

import ItemList from "../ItemList/ItemList";

//Spinner
const { CircularProgress } = require("@material-ui/core");

// Lista de Productos
const products = [
  {
    id: "01",
    title: "Whey Protein Cutter",
    description: "SPX Nutrition Max",
    price: "$1500",
    category: "ofertas",
    pictureUrl: "https://i.ibb.co/TBJpHqw/3f.png",
  },
  {
    id: "02",
    title: "Whey Pro 2.0",
    description: "Nutrilab",
    price: "$1400",
    pictureUrl: "https://i.ibb.co/3dNpg0J/2f.png",
    category: "ofertas",
  },
  {
    id: "03",
    title: "True Made Whey Protein",
    description: "ENA Sport",
    price: "$5800",
    pictureUrl: "https://i.ibb.co/bNhB5Fj/f1.png",
  },

  {
    id: "04",
    title: "Advance Whey Proteina",
    description: "Xtrenght",
    price: "$2251",
    pictureUrl: "https://i.ibb.co/NnVvQjq/4f.png",
  },
];

// Retorna los productos en 2 segundos
function getProductsList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000);
  });
}

//COMPONENTE
const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { category } = useParams();
  const classes = useStyles();

  //Llamada al servidor
  useEffect(() => {
    //Renderiza las ofertas
    if (category) {
      const products = getProductsList();

      products.then((res) => {
        const product = res.filter((item) => item.category === "ofertas");
        setListProducts(product);
      });
      return () => {
        setListProducts(undefined);
      };
    } 
     //Renderiza todos los productos
    else {
      const products = getProductsList();

      products.then((list) => {
        setListProducts(list);
      });
      return () => {
        setListProducts(undefined);
      };
    }
  }, [category]);

  //Spinner
  if (listProducts === undefined || listProducts.length === 0  ) {
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
