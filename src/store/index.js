import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { epics, reducers } from "../modules";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(epics);

  return store;
}
