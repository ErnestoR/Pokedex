import React from "react";
import { Paper, Typography } from "@material-ui/core";
import SearchBar from "components/SearchBar";
import useStyles from "./styles";

const Home = props => {
  const classes = useStyles();

  return (
    <>
      <SearchBar
        inputProps={{
          placeholder: "Search PokeApi"
        }}
        iconProps={{
          onClick: props.onSearchClick
        }}
      />
      <Paper className={classes.root}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Home
        </Typography>
      </Paper>
    </>
  );
};

export default Home;
