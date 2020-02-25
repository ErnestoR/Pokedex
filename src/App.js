import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";
import Dashboard from "components/Dashboard";
import Routes from "./routes";
import configureStore from "./store";

const store = configureStore();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Router>
            <Dashboard>
              <Routes />
            </Dashboard>
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
