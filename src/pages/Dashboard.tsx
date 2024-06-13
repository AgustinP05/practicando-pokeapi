import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [pokemons, setPokemons] = useState([]);
    const userId = 'someUserId'; //userId de ejemplo
    
    useEffect(() => {
        const fetchPokemons = async () => {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
            console.log(response.data.results)
            setPokemons(response.data.results);
            console.log(pokemons)
          } catch (error) {
            console.error('Error fetching the pokemons:', error);
          }
        };
     
        fetchPokemons();
    }, [userId]);   
    return <>
        <h1>LA POKE API</h1>
        <ul>
        {pokemons.map((pokemon,index) => (
          <li key={index}>{index} - {pokemon.name}</li>
        ))}
      </ul>
    </>
}