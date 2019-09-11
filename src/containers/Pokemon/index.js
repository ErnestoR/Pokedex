import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "modules/pokemon";
import Pokemon from "pages/Pokemon";

function getEvolutionChainIDFromSpecies(species) {
  const evolutionChainURL = "https://pokeapi.co/api/v2/evolution-chain/";

  return species.evolution_chain.url.split(evolutionChainURL)[1].slice(0, -1);
}

const PokemonContainer = ({ match, ...props }) => {
  const { pokemons, species, evolutionChain, loading } = useSelector(
    state => state.pokemon
  );
  const {
    params: { id }
  } = match;
  const searchedPokemon = pokemons[id];
  const searchedSpecies = species[id];
  const searchedEvolutionChain =
    searchedSpecies &&
    evolutionChain[getEvolutionChainIDFromSpecies(searchedSpecies)];
  const dispatch = useDispatch();
  const loadPokemon = useCallback(id => dispatch(fetchPokemon(id)), [dispatch]);

  useEffect(() => {
    if (!searchedPokemon) {
      loadPokemon(id);
    }
  }, [id, loadPokemon, searchedPokemon]);

  return (
    <Pokemon
      loading={loading}
      data={{
        pokemon: searchedPokemon,
        species: searchedSpecies,
        evolutionChain: searchedEvolutionChain
      }}
      {...props}
    />
  );
};

export default PokemonContainer;
