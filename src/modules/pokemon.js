import { combineEpics } from "redux-observable";
// Actions
const POKEMON_FETCH_REQUEST = "POKEMON_FETCH_REQUEST";
const POKEMON_FETCH_SUCCESS = "POKEMON_FETCH_SUCCESS";

// Reducer
const initialState = {
  pending: false,
  error: null,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_FETCH_REQUEST:
    case POKEMON_FETCH_SUCCESS:
      console.log("reducer");

      return {
        ...state,
        error: null,
        pending: true
      };
    default:
      return state;
  }
};

// Action Creators
export const fetchPokemon = action$ => {
  return action$.ofType(POKEMON_FETCH_REQUEST);
};

export const pokemonEpic = combineEpics(fetchPokemon);
