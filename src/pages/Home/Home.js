import React from "react";
import { Paper, CircularProgress } from "@material-ui/core";

import SearchBar from "components/SearchBar";
import PokemonList from "components/PokemonList";
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
        {props.loading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress />
          </div>
        ) : (
          <PokemonList data={props.list} />
        )}
      </Paper>
    </>
  );
};

export default Home;
