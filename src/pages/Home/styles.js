import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  paper: {
    minHeight: 300,
    padding: theme.spacing(2)
  },
  listContainer: {
    padding: theme.spacing(2)
  },
  loadingContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(6)
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300
  },
  root: {
    maxWidth: 600,
    margin: "0 auto"
  }
}));
