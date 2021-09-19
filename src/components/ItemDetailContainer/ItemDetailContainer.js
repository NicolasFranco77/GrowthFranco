import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../ItemDetail/ItemDetail";

import useStyles from "./styles";
import { Grid } from "@material-ui/core";

//Spinner
const { CircularProgress } = require("@material-ui/core");

//COMPONENTE
const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(undefined);
  const { title } = useParams();
  const classes = useStyles();

  // Retorna los productos
  const getItem = () => {
    return new Promise((resolve) => {
      const products = [
        {
          id: "01",
          title: "Whey Protein Cutter",
          description:
            '100% Whey protein con el agregado del potente CLA Acido Linoleico Conjugado (sigla en inglés) (potente quemador de grasa y reductor del colesterol malo) Sabores cremosos con textura American Style registrados SPX Hay Stock de Vainilla, Chocolate imperial o Frutilla, si elige varios puede pedir la opción "surtidos" en el selector de sabor y avisar INMEDIATAMENTE DESPUÉS DE COMPRAR los sabores por mensaje interno (no whatsapp sino mensaje interno desde la misma compra)',
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
        {
          id: "04",
          title: "Advance Whey Proteina",
          description: "Xtrenght",
          price: "$2251",
          pictureUrl:
            "https://http2.mlstatic.com/D_NQ_NP_909867-MLA42152644948_062020-O.webp",
        },
      ];
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

  //Simula llamada al servidor
  useEffect(() => {
    const item = getItem();
    item.then((res) => {
      const product = res.find((prod) => prod.title === title);
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
    <main >
      <div className={classes.toolbar} />
      <ItemDetail itemDetail={itemDetail} />
    </main>
  );
};

export default ItemDetailContainer;
