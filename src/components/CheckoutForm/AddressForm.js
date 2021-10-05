import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CartContext } from "../Context/CartContext";

/*--------------------Material UI--------------------*/
import { Button, Grid, TextField, Box } from "@material-ui/core";
/*--------------------Material UI--------------------*/
/*--------------------Firebase--------------------*/
import {
  collection,
  addDoc,
  getDoc,
  doc,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
/*--------------------Firebase--------------------*/
import Spinner from "../ConditionalComponents/Spinner/Spinner";

const AddressForm = () => {
  const [user, setUser] = useState();
  const { register, handleSubmit } = useForm();
  const { productsCart, clear, totalPrice } = useContext(CartContext);


 

  const confirmOrder = () => {
    const objOrder = {
      buyer: user,
      items: productsCart,
      total: totalPrice,
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    objOrder.items.forEach((prod, i) => {
      getDoc(doc(db, "products", prod.id)).then((DocumentSnapshot) => {
        if (DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
          batch.update(doc(db, "products", DocumentSnapshot.id), {
            stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity,
          });
        } else {
          outOfStock.push({
            ...DocumentSnapshot.data(),
            id: DocumentSnapshot.id,
          });
        }
      });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), objOrder)
        .then(() => {
          batch.commit().then(() => {
            alert("La orden se ejecuto con exito");
          });
        })
        .catch((error) => {
          alert("error", "Error al ejecutar la orden");
        })
        .finally(() => {
          clear();
        });
    }
  };

  const onSubmit = (data) => {
    setUser(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Nombre"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Apellido"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              {...register("lastname")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Dirección"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              {...register("adress")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Localidad"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              {...register("city")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="Provincia"
              fullWidth
              variant="standard"
              {...register("state")}
            />
          </Grid>
        </Grid>

        <br />

        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              variant="outlined"
              to="/cart"
              sx={{ mt: 3, ml: 1 }}
            >
              Volver
            </Button>
            {!user ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, ml: 1 }}
              >
                Listo
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => confirmOrder()}
              >
                Finalizar
              </Button>
            )}
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default AddressForm;
