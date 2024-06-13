import { useState } from "react"

export default function Login(params:type) {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("HOLA")
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <h1>Iniciar sesion</h1>
        <div className="flex gap-x-4">
            <input type="text" name="Username" id="" value={username} placeholder="Username" onChange={({target})=>setUsername(target.value)}/>
            <input type="password" name="" id="" value={password} placeholder="Password" onChange={({target})=>setPassword(target.value)}/> 
        </div>
        <button type="submit">Ingresar</button>
    </form>
}