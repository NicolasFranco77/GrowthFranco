import React from "react";

import useStyles from "./styles";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

import ItemCount from "../ItemCount/ItemCount";

//COMPONENTE
const ItemDetail = ({ itemDetail }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Grid container justifyContent="center" spacing={4}>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                {itemDetail.title}
              </Typography>
              <Typography variant="h5">{itemDetail.price}</Typography>
            </div>
            <Grid container justifyContent="center" spacing={4}>
              <img src={itemDetail.pictureUrl} alt="" />
            </Grid>
            <Typography variant="body2" color="textSecondary">
              {itemDetail.description}
            </Typography>
          </CardContent>

          <CardActions disableSpacing className={classes.cardActions}>
            <ItemCount stock={5} initial={1} />
          </CardActions>
        </Card>
      </Grid>
    </main>
  );
};

export default ItemDetail;
