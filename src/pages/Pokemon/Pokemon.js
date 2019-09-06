import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

import PokemonDetails from "components/Details";
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
    <>
      <PokemonDetails data={data.pokemon} species={data.species} />
      <AbilitiesList data={data.pokemon} />
      <MovesList data={data.pokemon} />
    </>
  );
};

export default Pokemon;
