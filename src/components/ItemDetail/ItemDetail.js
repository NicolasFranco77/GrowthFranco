import React from "react";
import { useState, useContext} from "react";


/*--------------------Components--------------------*/
import ItemCount from "../ItemCount/ItemCount";
import Cta from "../ConditionalComponents/CTA/Cta";
/*--------------------Components--------------------*/

/*--------------------Material UI--------------------*/
import useStyles from "./styles";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
/*--------------------Material UI--------------------*/



//COMPONENT
const ItemDetail = ({ itemDetail }) => {

  const [cart, setCart] = useState(true);
  const [itemCount, setItemCount] = useState();
  const [notification, setNotification] = useState(false)

/*--------------------Material UI--------------------*/
  const classes = useStyles();
/*--------------------Material UI--------------------*/

  
/*--------------------Count or Call to action--------------------*/
  const handleOnAdd = () => {
    setCart(false);

  };
/*--------------------Count or Call to action--------------------*/

  
  return (
    <main className={classes.content}>
      <Grid container justifyContent="center" spacing={4} xs={12} >
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.cardContent}>
              { /*--------------------Title--------------------*/}
              <Typography variant="h5" gutterBottom>
                {itemDetail.title}</Typography>
              { /*--------------------Title--------------------*/}

              { /*--------------------Price--------------------*/}
              <Typography variant="h5">${itemDetail.price}</Typography>
              { /*--------------------Price--------------------*/}

            </div>

            { /*--------------------Image--------------------*/}
            <Grid container justifyContent="center" spacing={4}>
              <img src={itemDetail.pictureUrl} alt="" /></Grid>
            { /*--------------------Image--------------------*/}

            { /*--------------------Long description--------------------*/}
            <Typography variant="body2" color="textSecondary">
              {itemDetail.longDescription}</Typography>
            { /*--------------------Long description--------------------*/}
           

          </CardContent>
          { /*--------------------Count or Call to action--------------------*/}
          {cart ?
          <CardActions disableSpacing className={classes.cardActions}>
              <Typography variant="button">En Stock: {itemDetail.stock}</Typography>
              <ItemCount
                setNotification={setNotification}
                stock={itemDetail.stock}
                item={itemDetail}
                initial={0}
                onAdd={handleOnAdd}
                setItemCount={setItemCount}
              />
               </CardActions>
             : 
              <Cta />
            }
          { /*--------------------Count or Call to action--------------------*/}
          {notification && <Typography  className={classes.cardActions} color="secondary" variant="button">Selecciona la cantidad</Typography>}
          {itemDetail.stock === 0 && <Typography  className={classes.cardActions} color="secondary" variant="button">Producto Agotado
          </Typography>}
        </Card>
      </Grid>
    </main>
  );
};

export default ItemDetail;
