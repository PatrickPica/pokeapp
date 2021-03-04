import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState("Start your adventure!");
  const [pokemonImg, setPokemonImg] = useState();
  const [wildpokemon, setWildpokemon] = useState("");
  const [typepokemon, setTypepokemon] = useState();

  function randomPokemon() {
    const randNum = Math.abs(Math.floor(Math.random() * (0 - 151)));
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.name);
        setTypepokemon(data.types);
        setWildpokemon("A wild Pokémon appeared!");
        setPokemonImg(data.sprites.other["official-artwork"].front_default);
        console.log(data);
      })
      .catch(console.error);
  }

  return (
    <div className="App">
      <h1>{wildpokemon}</h1>
      <img src={pokemonImg} />
      <div className="naampokemon">{pokemon}</div>

      {typepokemon &&
        typepokemon.map((type) => (
          <div
            className={
              type.type.name === "poison"
                ? "poison pokemontype"
                : type.type.name === "water"
                ? "water pokemontype"
                : type.type.name === "bug"
                ? "bug pokemontype"
                : ""
            }
            key={type.type.name}
          >
            {type.type.name}
          </div>
        ))}
      <button onClick={randomPokemon}>Catch Pokémon!</button>
    </div>
  );
}

export default App;
