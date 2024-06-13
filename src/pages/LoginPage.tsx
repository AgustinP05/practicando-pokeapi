import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { useForm } from "../customHook/useForm";

export default function LoginPage() {

    const navigate = useNavigate()

    const {username, password, onInputChange, onResetForm} = useForm({
        username:'',
        password:''
    })

    const onLogin = (e:Event) =>{
        e.preventDefault()
        
        navigate('/dashboard',{
            replace:true,
            state:{
                logged:true, //Eso es lo importante para las rutas privadas
                username
            }
        })

        onResetForm()
    }

    return <Login username={username} password={password} onInputChange={onInputChange} onLogin={onLogin}/>
}