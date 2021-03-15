import "./App.css";
import React from "react";
import Pokedexpage from "./Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Pokedex" component={Pokedexpage} />
      </Switch>
    </Router>
  );
}

export default App;
