import React, { useState, useEffect } from "react";
import { Paper, CircularProgress } from "@material-ui/core";

import SearchBar from "components/SearchBar";
import PokemonList from "components/PokemonList";
import useStyles from "./styles";

const Home = props => {
  const classes = useStyles();
  const { loading, list } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(list);
  }, [list]);

  function onSearchChange(e) {
    if (loading) return;

    const value = e.target.value;

    const filteredData = list.filter(item => item.name.includes(value));

    setData(filteredData);
  }

  return (
    <div className={classes.root}>
      <SearchBar
        inputProps={{
          placeholder: "Search PokeApi",
          onChange: onSearchChange
        }}
      />
      <Paper className={classes.paper} data-testid="pokemon-list-container">
        {loading || !data ? (
          <div className={classes.loadingContainer}>
            <CircularProgress data-testid="loading-progress" />
          </div>
        ) : (
          <PokemonList data={data} />
        )}
      </Paper>
    </div>
  );
};

export default Home;
