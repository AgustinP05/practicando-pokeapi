
export default function Login({username, password, onInputChange, onLogin}) {

    // const [username,setUsername]=useState('')
    // const [password,setPassword]=useState('')

    // const handleSubmit = (event) =>{
    //     event.preventDefault()
    //     console.log("HOLA")
    // }
    return <form onSubmit={onLogin} className="flex flex-col gap-y-4">
        <h1>Iniciar sesion</h1>
        <div className="flex gap-x-4">
            <input type="text" name="username" id="" value={username} placeholder="Username" onChange={onInputChange}/>
            <input type="password" name="password" id="" value={password} placeholder="Password" onChange={onInputChange}/> 
        </div>
        <button type="submit">Ingresar</button>
    </form>
}