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
    const request = fetch(`${API_URL}/pokemon/${id}`).then(response => {
      return response.json();
    });

    return from(request);
  }
};

export default api;
