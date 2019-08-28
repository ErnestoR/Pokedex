import React from "react";

import PokemonDetails from "components/Details";
import AbilitiesList from "components/AbilitiesList";
import MovesList from "components/MovesList";

const Pokemon = props => {
  const { data, loading } = props;

  if (loading || !data) {
    return <div>loading</div>;
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
