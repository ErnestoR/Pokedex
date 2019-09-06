import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

import PokemonDetails from "components/Details";
import AbilitiesList from "components/AbilitiesList";
import MovesList from "components/MovesList";
import useStyles from "./styles";

const Pokemon = props => {
  const { data, loading } = props;
  const classes = useStyles();

  if (loading || !data) {
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
      <PokemonDetails data={data} />
      <AbilitiesList data={data} />
      <MovesList data={data} />
    </>
  );
};

export default Pokemon;
