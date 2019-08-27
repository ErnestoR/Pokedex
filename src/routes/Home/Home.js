import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 300,
    padding: theme.spacing(2)
  },
  listContainer: {
    padding: theme.spacing(2)
  }
}));

const Home = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Home
      </Typography>
    </Paper>
  );
};

export default Home;
