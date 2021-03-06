import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

import PokemonDetails from "components/Details";
import EvolutionChainList from "components/EvolutionChainList";
import AbilitiesList from "components/AbilitiesList";
import MovesList from "components/MovesList";
import useStyles from "./styles";

const Pokemon = props => {
  const { data, loading } = props;
  const classes = useStyles();

  if (loading || !data.pokemon) {
    return (
      <div className={classes.loadingRoot}>
        <CircularProgress />
        <Typography
          className={classes.loadingText}
          variant="h5"
          color="textSecondary"
        >
          Loading Pokemon
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <PokemonDetails data={data.pokemon} species={data.species} />
      <EvolutionChainList
        species={data.species}
        evolutionChain={data.evolutionChain}
      />
      <AbilitiesList data={data.pokemon} />
      <MovesList data={data.pokemon} />
    </div>
  );
};

export default Pokemon;
