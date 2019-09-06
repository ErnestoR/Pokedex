import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPokemon } from "modules/pokemon";
import Pokemon from "pages/Pokemon";

function getEvolutionChainIDFromSpecies(species) {
  const evolutionChainURL = "https://pokeapi.co/api/v2/evolution-chain/";

  return species.evolution_chain.url.split(evolutionChainURL)[1].slice(0, -1);
}

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
  species: state.pokemon.species,
  evolutionChain: state.pokemon.evolutionChain,
  loading: state.pokemon.loadingPokemon
});
const mapDispathToProps = dispatch => {
  return {
    loadPokemon: id => dispatch(fetchPokemon(id))
  };
};

const PokemonContainer = ({
  loadPokemon,
  match,
  pokemons,
  species,
  evolutionChain,
  ...props
}) => {
  const {
    params: { id }
  } = match;
  const searchedPokemon = pokemons[id];
  const searchedSpecies = species[id];
  const searchedEvolutionChain =
    searchedSpecies &&
    evolutionChain[getEvolutionChainIDFromSpecies(searchedSpecies)];

  useEffect(() => {
    if (!searchedPokemon) {
      loadPokemon(id);
    }
  }, [id, loadPokemon, searchedPokemon]);

  return (
    <Pokemon
      data={{
        pokemon: searchedPokemon,
        species: searchedSpecies,
        evolutionChain: searchedEvolutionChain
      }}
      {...props}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(PokemonContainer);
