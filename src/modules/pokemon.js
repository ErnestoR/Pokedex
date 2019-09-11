import { combineEpics, ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import api from "api/pokemon";

// Actions
const POKEMON_LIST_FETCH_REQUEST = "POKEMON_LIST_FETCH_REQUEST";
const POKEMON_LIST_FETCH_SUCCESS = "POKEMON_LIST_FETCH_SUCCESS";

const POKEMON_FETCH_REQUEST = "POKEMON_FETCH_REQUEST";
const POKEMON_FETCH_SUCCESS = "POKEMON_FETCH_SUCCESS";

// Reducer
const initialState = {
  loadingList: false,
  loadingPokemon: false,
  error: null,
  list: [],
  pokemons: {},
  species: {},
  evolutionChain: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_LIST_FETCH_REQUEST: {
      return {
        ...state,
        error: null,
        loadingList: true
      };
    }
    case POKEMON_LIST_FETCH_SUCCESS: {
      const { results, count } = action.payload;

      return {
        ...state,
        error: null,
        loadingList: false,
        list: [...results],
        count
      };
    }
    case POKEMON_FETCH_REQUEST: {
      return {
        ...state,
        error: null,
        loadingPokemon: true
      };
    }
    case POKEMON_FETCH_SUCCESS: {
      const { pokemon, species, evolutionChain } = action.payload;

      const mergedPokemons = {
        ...state.pokemons,
        [pokemon.name]: {
          ...pokemon
        }
      };
      const mergedSpecies = {
        ...state.species,
        [species.name]: {
          ...species
        }
      };
      const mergedEvolutionChain = {
        ...state.evolutionChain,
        [evolutionChain.id]: {
          ...evolutionChain
        }
      };

      return {
        ...state,
        error: null,
        loadingPokemon: false,
        pokemons: mergedPokemons,
        species: mergedSpecies,
        evolutionChain: mergedEvolutionChain
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const fetchPokemonList = () => ({
  type: POKEMON_LIST_FETCH_REQUEST
});

export const fetchPokemon = id => ({
  type: POKEMON_FETCH_REQUEST,
  payload: id
});

// Epics
const fetchPokemonListEpic = action$ => {
  return action$.pipe(
    ofType(POKEMON_LIST_FETCH_REQUEST),
    mergeMap(action =>
      api
        .fetchPokemonList(action.payload)
        .pipe(map(payload => ({ type: POKEMON_LIST_FETCH_SUCCESS, payload })))
    )
  );
};

const fetchPokemonEpic = action$ => {
  return action$.pipe(
    ofType(POKEMON_FETCH_REQUEST),
    mergeMap(action =>
      api
        .fetchPokemonByID(action.payload)
        .pipe(map(payload => ({ type: POKEMON_FETCH_SUCCESS, payload })))
    )
  );
};

export const pokemonEpic = combineEpics(fetchPokemonListEpic, fetchPokemonEpic);
