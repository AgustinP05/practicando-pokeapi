import { useEffect, useState } from 'react';
import axios from 'axios';
import {  useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const {state} = useLocation()
    const navigate = useNavigate()

    const onLogout = () =>{
      navigate('/login', {
        replace:true
      })
    }

    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        // const fetchPokemons = async () => {
        //   try {
        //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        //     //console.log(response.data.results)
        //     setPokemons(response.data.results);
        //     //console.log(pokemons)
        //   } catch (error) {
        //     console.error('Error fetching the pokemons:', error);
        //   }
        // };
     
        // fetchPokemons();

        const fetchPokemons = async () => {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
            const promises = response.data.results.map(async (pokemon)=>{
              //console.log(pokemon)
              const res = await axios.get(pokemon.url)
              //console.log(res.data)
             
              return res.data
            })
            const results = await Promise.all(promises)
            setPokemons(results)
          } catch (error) {
            console.error('Error fetching the pokemons:', error);
          }
        };
        
        fetchPokemons();
        
    },[]);   
    return <>
        <h1>LA POKE API</h1>
        <h2>BIENVENIDO {state?.username}  <button onClick={onLogout}>Cerrar sesion</button></h2>
        <ul>
        {pokemons.map((pokemon) => (
          <div onClick={()=>{
            navigate(`/dashboard/pokemon/${pokemon.id}`, {
              replace:true,
              state:{
                logged:true, //Eso es lo importante para las rutas privadas
                username:state?.username,
                pokemonUrl:pokemon.forms[0].url,
                pokemonId:pokemon.id,
                pokemonName:pokemon.name,
                pokemonImg:pokemon.sprites.front_default,
                pokemonNext:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(pokemon.id + 1)}.png`,
                pokemonTypes:pokemon.types,
                pokemonAbilities:pokemon.abilities
              }
            })
          }} >
            <li key={pokemon.id} className='flex justify-between my-4 w-[700px] p-2 items-center cursor-pointer bg-slate-500 rounded-lg'> 
              <div className='flex gap-x-2 w-[20%]'>{pokemon.types.map((type)=><span className='uppercase bg-blue-500 p-2 rounded-md'>{type.type.name}</span>)}</div>
              <h2 className='uppercase '>{pokemon.name}</h2>
              <div className=''>N°: {pokemon.id}</div>
            </li>
          </div>
        ))}
      </ul>
    </>
}