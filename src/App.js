import React from "react";
import { CssBaseline, Slide } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { AnimatedSwitch } from "react-router-transition";

import theme from "./theme";
import Dashboard from "./components/Dashboard";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";

const App = () => {
  console.log({ theme });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Dashboard>
            <AnimatedSwitch
              atEnter={{
                opacity: 0
              }}
              atLeave={{
                opacity: 0
              }}
              atActive={{
                opacity: 1
              }}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </AnimatedSwitch>
          </Dashboard>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
