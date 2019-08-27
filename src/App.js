import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";
import Dashboard from "components/Dashboard";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Dashboard>
            <Routes />
          </Dashboard>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
