import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/commerce.png";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          {/*---------------------------Brand---------------------------*/}
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

          {/*------------------------------MENU----------------------------*/}
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              variant="text"
              color="default"
              className={classes.menuButton}
            >
              PRODUCTOS
            </Button>
          </NavLink>

          <NavLink
            to="/category/proteinas"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="text"
              color="default"
              className={classes.menuButton}
            >
              PROTEÍNAS
            </Button>
          </NavLink>
          <NavLink to="/category/shakers" style={{ textDecoration: "none" }}>
            <Button variant="text" className={classes.menuButton}>
              SHAKERS
            </Button>
          </NavLink>

          <div className={classes.button} />
          <NavLink
            to="/cart"
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
