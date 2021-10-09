import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Button,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  collection,
  where,
  addDoc,
  getDoc,
  doc,
  Timestamp,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const Review = ({ user, setUser, setSteps, setResult }) => {
  const { productsCart, totalPrice, clear } = useContext(CartContext);

  /*--------------Payments Mock-------------*/
  const payments = [
    { name: "Tarjeta", detail: "Visa" },
    { name: "Número", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Vencimiento", detail: "04/2024" },
  ];

  /*----Step back----*/
  const handleOnClick = () => {
    setSteps(0); //back to AdressForm
  };

  const confirmOrder = () => {
    setSteps(2); //step forward to ResultMessage

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
            setResult(1);
            clear();

            /*- -----------------------------------------------------------*/
            getDocs(
              query(
                collection(db, "orders"),
                where("date", "==", objOrder.date)
              )
            )
              .then((querySnapshot) => {
                var userId = querySnapshot.docs.map((doc) => {
                  return doc.id;
                });
                setUser({ id: userId, ...user });
              })
              .catch((error) => {
                console.log("Error searching intems", error);
              });

            /*----------------------------------------------------------- */
          });
        })
        .catch((error) => {
          alert("Error al ejecutar la orden");
          setResult(false);
        });
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Resumen de compra
      </Typography>
      <List disablePadding>
        {productsCart.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.title}
              secondary={product.description}
            />
            <Typography variant="body2">
              ${product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: "800" }}>
            ${totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Datos de envío
          </Typography>
          <Typography
            gutterBottom
          >{`${user?.name} ${user?.lastname}`}</Typography>
          <Typography>{user?.phone}</Typography>
          <Typography gutterBottom>{user?.adress}</Typography>
          <Typography
            gutterBottom
          >{`${user?.city},  ${user?.state}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              onClick={handleOnClick} //back to AdressForm
              sx={{ mt: 3, ml: 1 }}
            >
              Volver
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => confirmOrder()}
            >
              Finalizar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
