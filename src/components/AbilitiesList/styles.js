import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  listContainer: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },

  list: {
    overflow: "auto",
    maxHeight: 300
  }
}));
