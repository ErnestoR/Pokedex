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
  root: {
    maxWidth: 600,
    margin: "0 auto"
  }
}));
