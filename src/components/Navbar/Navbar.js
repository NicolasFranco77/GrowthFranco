import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Growth
          </Typography>
          <div className={classes.grow} />
          <Button
            variant="text"
            color="secondary"
            className={classes.menuButton}
          >
            Ofertas
          </Button>
          <Button variant="text" color="default" className={classes.menuButton}>
            Contacto
          </Button>

          <div className={classes.button} />

          <IconButton to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
