import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",

      marginRight: theme.spacing(1),
    },
  },
  image: {
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(-1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
      marginRight: theme.spacing(1),
    },
  },

  grow: {
    flexGrow: 1,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  selected: {
    color: "#e91e63",
    textDecoration: "none",
  },
}));
