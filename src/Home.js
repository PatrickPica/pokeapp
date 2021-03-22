import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* hier wordt de functie aangemaakt met gebruik van useStates waarin data kan worden opgeslagen,
 dus voor de afbeelding, naam, type en nummer. */
function Home() {
  const [pokemon, setPokemon] = useState("Start your adventure!");
  const [pokemonImg, setPokemonImg] = useState();
  const [wildpokemon, setWildpokemon] = useState("");
  const [typepokemon, setTypepokemon] = useState();
  const [nummerpokemon, setNummerpokemon] = useState();

  /* Hier maak ik een functie aan die de API aanroept en dan de data daarvan in de bovenstaande variabelen plaatst.*/
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
/* Hier probeerde ik voor in mijn pokedex pagina een array aan te maken die de data plaatst van de Pokémon die al geweest zijn */
  const [pokemonArray, setPokemonArray] = useState([]);
  console.log(pokemonArray);
/* In principe is dit eigelijk plain html wat ook gebruikt wordt in react om de content te laden in de pagina. 
hier plaats ik de variabelen waar de data in zit.*/
  return (
    <div className="home">
      <Link to="/Pokedex">
        <div className="pokedexicoon">
          <img src="../pokedexicon.png" alt="pokedexicoon" />
        </div>
      </Link>
      {/* Wat ik hier dus heb gedaan is in mijn html componenten de variabelen geplaatst waardoor de data daar wordt weergegeven
      Daaronder met die classname heb ik een soort loopje gemaakt waardoor de classname checkt of hij overeenkomt met de type pokémon. Is dit waar?
      geef dan de type pokemon de classname die hetzelfde is als de type van de pokemon waardoor er een kleurtje aan wordt gegeven. */}
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
