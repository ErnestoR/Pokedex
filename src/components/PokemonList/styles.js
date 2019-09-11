import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto"
  }
}));
