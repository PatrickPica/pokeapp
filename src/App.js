import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState();
  const [pokemonImg, setPokemonImg] = useState();

  function randomPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        let randNum = Math.abs(Math.floor(Math.random() * (0 - 151)));
        setPokemon(data.results[randNum].name);

        // setPokemonImg(data.results[randNum].url);
      })
      .catch(console.error);
  }

  return (
    <div className="App">
      <h1>A wild Pokémon appeared!Aangie is cute</h1>
      <div className="cirkel"></div>
      <img src={pokemonImg} />
      <div className="naampokemon">{pokemon}</div>
      <button onClick={randomPokemon}>Catch Pokémon!</button>
    </div>
  );
}

export default App;
