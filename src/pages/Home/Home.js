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
    <>
      <SearchBar
        inputProps={{
          placeholder: "Search PokeApi",
          onChange: onSearchChange
        }}
      />
      <Paper className={classes.root}>
        {loading || !data ? (
          <div className={classes.loadingContainer}>
            <CircularProgress />
          </div>
        ) : (
          <PokemonList data={data} />
        )}
      </Paper>
    </>
  );
};

export default Home;
