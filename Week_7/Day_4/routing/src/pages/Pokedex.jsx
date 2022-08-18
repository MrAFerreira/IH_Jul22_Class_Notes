import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokedex() {
  //The info that comes from the api - initially it should be null
  const [pokemon, setPokemon] = useState(null);

  //Text input for the searchbar
  const [input, setInput] = useState('');

  //The final query the user wants to search for
  const [pokemonName, setPokemonName] = useState(null);

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setPokemonName(input);
  };

  const getPokemon = async () => {
    try {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Using .then
    /*     axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log('Searched Api');
        setPokemon(response.data);
      })
      .catch((err) => console.log(err)); */

    //using async await

    getPokemon();
    //this useffecxt will only run if the name is different
  }, [pokemonName]);

  return (
    <div>
      <h2>Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Search Pokemon</button>
      </form>

      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="" />
        </>
      )}
    </div>
  );
}

export default Pokedex;
