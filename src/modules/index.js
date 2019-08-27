import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import pokemonReducer, { pokemonEpic } from "./pokemon";

export const epics = combineEpics(pokemonEpic);

export const reducers = combineReducers({
  pokemon: pokemonReducer
});
