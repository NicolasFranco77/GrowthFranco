import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    maxWidth: "50%",
    
  
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  cardActions2: {
    display: "flex",
    justifyContent: "space-between",
  },


  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },



}));
