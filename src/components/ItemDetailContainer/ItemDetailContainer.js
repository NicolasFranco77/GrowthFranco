import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});

  const getItem = () => {
    return new Promise((resolve) => {
      const protein = {
        id: "01",
        title: "Whey Protein Cutter",
        description:
          '100% Whey protein con el agregado del potente CLA Acido Linoleico Conjugado (sigla en inglés) (potente quemador de grasa y reductor del colesterol malo) Sabores cremosos con textura American Style registrados SPX Hay Stock de Vainilla, Chocolate imperial o Frutilla, si elige varios puede pedir la opción "surtidos" en el selector de sabor y avisar INMEDIATAMENTE DESPUÉS DE COMPRAR los sabores por mensaje interno (no whatsapp sino mensaje interno desde la misma compra)',
        price: "$1500",
        pictureUrl:
          "https://http2.mlstatic.com/D_NQ_NP_898406-MLA43344494942_092020-O.webp",
      };
      setTimeout(() => {
        resolve(protein);
      }, 2000);
    });
  };

  useEffect(() => {
    const item = getItem();

    item.then((resolve) => setItemDetail(resolve));
  }, []);

  return (
    <main>
      <ItemDetail itemDetail={itemDetail} />
    </main>
  );
};

export default ItemDetailContainer;
