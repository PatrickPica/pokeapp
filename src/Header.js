import React from "react";
import {Link} from 'react-router-dom';

function Pokedexplaatje() {
    return(
        <Link to="/Pokedex">
        <div className="pokedexicoon">
          <img src="../pokedexicon.png" alt="pokedexicoon"/>    
        </div>
        </Link>
    );
}

export default Pokedexplaatje;