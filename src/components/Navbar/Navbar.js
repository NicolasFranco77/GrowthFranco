import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import CartWidget from './CartWidget'


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
          <CartWidget/>
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
