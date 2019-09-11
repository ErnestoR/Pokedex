import { from } from "rxjs";

const API_URL = "https://pokeapi.co/api/v2";

const api = {
  fetchPokemonList: () => {
    const request = fetch(`${API_URL}/pokemon?limit=1000`).then(response => {
      return response.json();
    });

    return from(request);
  },
  fetchPokemonByID: id => {
    const request = fetch(`${API_URL}/pokemon/${id}`)
      .then(response => {
        return response.json();
      })
      .then(api.fetchPokemonSpecies)
      .then(api.fetchPokemonEvolutionChain);

    return from(request);
  },

  fetchPokemonSpecies: pokemon =>
    fetch(pokemon.species.url)
      .then(response => response.json())
      .then(species => ({ pokemon, species })),

  fetchPokemonEvolutionChain: ({ pokemon, species }) => {
    return fetch(species.evolution_chain.url)
      .then(response => response.json())
      .then(evolutionChain => ({ pokemon, species, evolutionChain }));
  }
};

export default api;
