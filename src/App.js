import "./App.css";
import React from "react";
import Pokedexpage from "./Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
//Hier wordt de router toegepast, dit is een manier om meerdere pagina's te linken aan elkaar en aangezien ik er 2 heb moest ik deze linken aan elkaar.
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
