import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"


export default function SpecificPokemon(params:any) {
    const [pokemon, setPokemon] = useState([])
    const {state} = useLocation()
    const navigate = useNavigate()


    const toDashboard = () =>{
        console.log()
        navigate('/dashboard', {
          replace:true,
          state:{
            logged:true, //Eso es lo importante para las rutas privadas
            username:state?.username
        }
        })
      }

    return <article className="flex flex-col gap-y-4">
        <button onClick={toDashboard}>Volver a dashboard</button>
        <h1>LA POKEDEX de {state?.username}</h1>
        <div className='flex justify-between my-4 w-[700px] p-2 items-center bg-slate-500 rounded-lg'> 
              <div className='flex gap-x-2 w-[20%]'>{state?.pokemonTypes.map((type)=><span className='uppercase bg-blue-500 p-2 rounded-md'>{type.type.name}</span>)}</div>
              <h2 className='uppercase '>{state?.pokemonName}</h2>
              <div className=''>N°: {state?.pokemonId}</div>
        </div>
        <div className="flex w-full h-[400px] bg-gray-700 items-center rounded-lg">
            <img src={state?.pokemonImg} alt="Pokemon" className=" m-auto w-[400px]" />
        </div>
        <div className="flex w-full h-[400px] bg-gray-500 items-center rounded-lg py-4">
            <div className="flex flex-col h-full gap-y-4 m-auto">
                Habilidades:
             {state?.pokemonAbilities.map((ability)=><span className='uppercase bg-blue-500 p-2 rounded-md'>{ability.ability.name}</span>)}
            </div>
            <div className="h-full">
            Siguiente pokemon
            <img src={state?.pokemonNext} alt="Pokemon" className=" m-auto w-[350px]" />
            </div>
            
        </div>
        
    </article> 
}