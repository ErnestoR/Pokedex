import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  loadingRoot: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh"
  },
  loadingText: {
    marginTop: theme.spacing(3)
  }
}));
