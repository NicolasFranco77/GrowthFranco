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
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      marginRight: theme.spacing(1),
    },
  },
  image: {
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      marginRight: theme.spacing(-1.5),
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
}));
