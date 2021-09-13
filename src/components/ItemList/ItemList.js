import React from "react";
import Item from "../Item/Item";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import useStyles from "./styles";

const products = [
  {
    id: "01",
    title: "Whey Protein Cutter",
    description: "SPX Nutrition Max",
    price: "$1500",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_898406-MLA43344494942_092020-O.webp",
  },
  {
    id: "02",
    title: "Whey Pro 2.0",
    description: "Nutrilab",
    price: "$1400",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_649385-MLA43464749729_092020-O.webp",
  },
  {
    id: "03",
    title: "True Made Whey Protein",
    description: "ENA Sport",
    price: "$5800",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_732415-MLA46275367315_062021-O.webp",
  },
];

function getProductsList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000);
  });
}

const ItemList = () => {
  const classes = useStyles();
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const list = getProductsList();

    list.then((list) => {
      setListProducts(list);
    });
  }, []);

  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={4}>
        {listProducts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Item item={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default ItemList;
