import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonAxios = props => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response =>{ 
        console.log(response);
        setPokemonData(response.data.results)
      }) 
      .catch((err)=> 
        console.log(err)
      )
  }, []);

  return (
    <div>
      {pokemonData.map((pokemon, index) => (
        <div>
          {pokemon.name}
        </div>
      )
      
      )}
    </div>
  );
}

export default PokemonAxios;
