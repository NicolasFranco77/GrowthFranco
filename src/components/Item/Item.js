import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.pictureUrl}
        title={item.title}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="h5">{item.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
