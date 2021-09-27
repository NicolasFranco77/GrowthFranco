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
    oferta: true,
    category: "proteinas",
    pictureUrl: "https://i.ibb.co/TBJpHqw/3f.png",
  },
  {
    id: "02",
    title: "Whey Pro 2.0",
    description: "Nutrilab",
    price: "$1400",
    pictureUrl: "https://i.ibb.co/3dNpg0J/2f.png",
    category: "proteinas",
  },
  {
    id: "03",
    title: "True Made Whey Protein",
    description: "ENA Sport",
    price: "$5800",
    category: "proteinas",
    pictureUrl: "https://i.ibb.co/bNhB5Fj/f1.png",
  },

  {
    id: "04",
    title: "Advance Whey Proteina",
    description: "Xtrenght",
    price: "$2251",
    category: "proteinas",
    pictureUrl: "https://i.ibb.co/NnVvQjq/4f.png",
  },
  {
    id: "05",
    title: "Shaker Gold",
    description: "Gold Nutrition",
    price: "$500",
    category: "shakers",
    pictureUrl: "https://i.ibb.co/TqYGC4G/1-final.png",
  },
  {
    id: "06",
    title: "Shaker Pink",
    description: "BSX Nutrition",
    price: "$350",
    category: "shakers",
    pictureUrl: "https://i.ibb.co/gy1w6cG/2final.png",
  },
  {
    id: "07",
    title: "Shaker Gentech ",
    description: "Gentech",
    price: "$995",
    category: "shakers",
    pictureUrl: "https://i.ibb.co/KXhC6TL/5.png",
  },
  {
    id: "08",
    title: "Shaker Plus Ena  ",
    description: "ENA Sport",
    price: "$690",
    category: "shakers",
    pictureUrl: "https://i.ibb.co/KFQT3Wd/77777.png",
  },
];

// Retorna los productos en 2 segundos
function getProductsList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 0);
  });
}

//COMPONENTE
const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { category } = useParams();
  const classes = useStyles();

//Renderiza las ofertas o todos los productos
 useEffect(() => {

  //Renderiza las ofertas
  if (category === "ofertas" ) {
    const products = getProductsList();

    products.then((res) => {
      const product = res.filter((item) => item.oferta);
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

  
  useEffect(() => {
    //Renderiza las categorías
    if (category === "proteinas" || category === "shakers"  ) {
      const products = getProductsList();

      products.then((res) => {
        const product = res.filter((item) => item.category === category);
       
        setListProducts(product);
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


