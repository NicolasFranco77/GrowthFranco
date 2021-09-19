import React from "react";

import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

import logo from "../../assets/commerce.png";

import CartWidget from "./CartWidget";

//COMPONENTE
const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
          </Link>
          <div className={classes.grow} />
          <NavLink
            to="/category/ofertas"
            activeClassName={classes.active}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="text"
              color="secondary"
              className={classes.menuButton}
            >
              Ofertas
            </Button>
          </NavLink>
          <NavLink
            to="/contacto"
            
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="text"
              color="default"
              className={classes.menuButton}
            >
              Contacto
            </Button>
          </NavLink>

          <div className={classes.button} />
          <NavLink
            to="/carrito"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CartWidget />
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
