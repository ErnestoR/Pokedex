import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    minHeight: 300,
    padding: theme.spacing(2),
    maxWidth: 600,
    margin: "0 auto"
  },
  listContainer: {
    padding: theme.spacing(2)
  }
}));
