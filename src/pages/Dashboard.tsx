import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,  useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const {state} = useLocation()
    const navigate = useNavigate()

    const onLogout = () =>{
      navigate('/login', {
        replace:true
      })
    }

    const toPokemon = () =>{
      navigate('/dashboard/pokemon/1', {
        replace:true,
        state:{
          logged:true, //Eso es lo importante para las rutas privadas
          
      }
      })
    }

    const [pokemons, setPokemons] = useState([]);
   
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
    });   
    return <>
        <h1>LA POKE API</h1>
        <h2>BIENVENIDO {state?.username}  <button onClick={onLogout}>Cerrar sesion</button></h2>
        <ul>
        {pokemons.map((pokemon,index) => (
          <div onClick={toPokemon} >
            <li key={index}>{index} - {pokemon.name}</li>
          </div>
        ))}
      </ul>
    </>
}