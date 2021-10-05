import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/commerce.png";
/*--------------------Material UI--------------------*/
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
/*--------------------Material UI--------------------*/
/*--------------------Components--------------------*/
import CartWidget from "./CartWidget";
/*--------------------Components--------------------*/


//COMPONENT

const Navbar = () => {
  const classes = useStyles();
  

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit" >
        <Toolbar>
        {/*--------------------Brand--------------------*/}
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
           {/*--------------------Brand--------------------*/}
           {/*--------------------MENU--------------------*/}
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
          <NavLink
            to="/category/shakers"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="text"
              color="default"
              className={classes.menuButton}
            >
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
            {/*--------------------MENU--------------------*/}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
