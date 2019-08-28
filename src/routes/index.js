import React from "react";
import { AnimatedSwitch } from "react-router-transition";
import { Route } from "react-router-dom";

import Home from "routes/Home";
import About from "routes/About";
import Pokemon from "routes/Pokemon";
import "./animateRoutes.css";

const Routes = () => {
  return (
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
      <Route path="/about" component={About} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </AnimatedSwitch>
  );
};

export default Routes;
