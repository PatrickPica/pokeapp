import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pokemon, setPokemon] = useState("Start your adventure!");
  const [pokemonImg, setPokemonImg] = useState();
  const [wildpokemon, setWildpokemon] = useState("");
  const [typepokemon, setTypepokemon] = useState();
  const [nummerpokemon, setNummerpokemon] = useState();

  function randomPokemon() {
    const randNum = Math.abs(Math.floor(Math.random() * (0 - 151)));
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.name);
        setTypepokemon(data.types);
        setNummerpokemon(data.id);
        setWildpokemon("A wild Pokémon appeared!");
        setPokemonImg(data.sprites.other["official-artwork"].front_default);
        console.log(data);
        setPokemonArray(pokemonArray.slice().push(data));
        // pokemonArray.slice().push(data)
      })
      .catch(console.error);
  }

  const [pokemonArray, setPokemonArray] = useState([]);
  console.log(pokemonArray);

  return (
    <div className="home">
      <Link to="/Pokedex">
        <div className="pokedexicoon">
          <img src="../pokedexicon.png" alt="pokedexicoon" />
        </div>
      </Link>

      <h1>{wildpokemon}</h1>
      <img src={pokemonImg} />
      {nummerpokemon && <p className="pokemonnumber">#{nummerpokemon}</p>}
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
                : type.type.name === "normal"
                ? "normal pokemontype"
                : type.type.name === "electric"
                ? "electric pokemontype"
                : type.type.name === "fighting"
                ? "fighting pokemontype"
                : type.type.name === "ground"
                ? "ground pokemontype"
                : type.type.name === "psychic"
                ? "psychic pokemontype"
                : type.type.name === "rock"
                ? "rock pokemontype"
                : type.type.name === "fire"
                ? "fire pokemontype"
                : type.type.name === "grass"
                ? "grass pokemontype"
                : type.type.name === "ice"
                ? "ice pokemontype"
                : type.type.name === "flying"
                ? "flying pokemontype"
                : type.type.name === "ghost"
                ? "ghost pokemontype"
                : type.type.name === "dragon"
                ? "dragon pokemontype"
                : ""
            }
            key={type.type.name}
          >
            {type.type.name}
          </div>
        ))}

      <button className="catchknop" onClick={randomPokemon}>
        Catch Pokémon!
      </button>
    </div>
  );
}

export default Home;
