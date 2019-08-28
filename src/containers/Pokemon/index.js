import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPokemon } from "modules/pokemon";
import Pokemon from "pages/Pokemon";

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
  loading: state.pokemon.loadingPokemon
});
const mapDispathToProps = dispatch => {
  return {
    loadPokemon: id => dispatch(fetchPokemon(id))
  };
};

const PokemonContainer = ({ loadPokemon, match, pokemons, ...props }) => {
  const {
    params: { id }
  } = match;
  const searchedPokemon = pokemons[id];

  useEffect(() => {
    if (!searchedPokemon) {
      loadPokemon(id);
    }
  }, [id, loadPokemon, searchedPokemon]);

  return <Pokemon data={searchedPokemon} {...props} />;
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(PokemonContainer);
