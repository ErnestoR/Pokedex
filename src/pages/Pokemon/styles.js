import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  media: {
    width: 200,
    height: 200
  },
  listContainer: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },

  list: {
    overflow: "auto",
    maxHeight: 300
  }
}));
