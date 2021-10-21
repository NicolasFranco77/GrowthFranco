import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/commerce.png";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
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

          <Typography
            component={NavLink}
            exact
            to="/"
            variant="button"
            className={classes.menuButton}
            activeClassName={classes.selected}
          >
            PRODUCTOS
          </Typography>

          <Typography
            component={NavLink}
            to="/category/proteinas"
            variant="button"
            className={classes.menuButton}
            activeClassName={classes.selected}
          >
            PROTEÍNAS
          </Typography>

          <Typography
            component={NavLink}
            to="/category/shakers"
            variant="button"
            className={classes.menuButton}
            activeClassName={classes.selected}
          >
            SHAKERS
          </Typography>

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
