import { combineEpics, ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
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
    case POKEMON_FETCH_REQUEST: {
      console.log("reducer");

      return {
        ...state,
        error: null,
        pending: true
      };
    }

    case POKEMON_FETCH_SUCCESS: {
      console.log("reducer POKEMON_FETCH_SUCCESS");
      return {
        ...state,
        error: null,
        pending: false
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const fetchPokemon = () => ({
  type: POKEMON_FETCH_REQUEST
});

const fetchPokemonEpic = action$ => {
  return action$.pipe(
    ofType(POKEMON_FETCH_REQUEST),
    delay(1000),
    mapTo({ type: POKEMON_FETCH_SUCCESS })
  );
};

export const pokemonEpic = combineEpics(fetchPokemonEpic);
