import React from "react";
import { Link } from "react-router-dom";

import Item from "../Item/Item";

import { Grid } from "@material-ui/core";

//COMPONENTE
const ItemList = ({ listProducts }) => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {listProducts?.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Link
              key={product.id}
              to={`/item/${product.id}/${product.title}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Item item={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default ItemList;
