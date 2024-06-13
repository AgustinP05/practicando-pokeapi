import { Link } from "react-router-dom"


export default function HomePage() {
    return<>
        <h1>HOMEPAGE</h1>
        <Link to="/login" className="mt-5">Ir al login</Link>
    </> 
}