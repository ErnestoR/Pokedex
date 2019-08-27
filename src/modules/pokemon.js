import { combineEpics, ofType } from "redux-observable";
import { delay, mergeMap, map } from "rxjs/operators";
import api from "api/pokemon";

// Actions
const POKEMON_LIST_FETCH_REQUEST = "POKEMON_LIST_FETCH_REQUEST";
const POKEMON_LIST_FETCH_SUCCESS = "POKEMON_LIST_FETCH_SUCCESS";

// Reducer
const initialState = {
  loading: false,
  error: null,
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_LIST_FETCH_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true
      };
    }

    case POKEMON_LIST_FETCH_SUCCESS: {
      const { results, count } = action.payload;

      return {
        ...state,
        error: null,
        loading: false,
        list: [...results],
        count
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

const fetchPokemonEpic = action$ => {
  return action$.pipe(
    ofType(POKEMON_LIST_FETCH_REQUEST),
    mergeMap(action =>
      api.fetchPokemonList(action.payload).pipe(
        delay(1000), // REMOVE ME??? it adds a nice animation since data is quite fast
        map(payload => ({ type: POKEMON_LIST_FETCH_SUCCESS, payload }))
      )
    )
  );
};

export const pokemonEpic = combineEpics(fetchPokemonEpic);
