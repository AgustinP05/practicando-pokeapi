import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
import SpecificPokemon from "../pages/SpecificPokemon"
import { PrivateRoute } from "./PrivateRoute"

export default function AppRouter() {
    return <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/dashboard" element={
            <PrivateRoute>
                <Dashboard/>
            </PrivateRoute>
            }/>
            
            <Route path="/dashboard/pokemon/:id" element={<PrivateRoute><SpecificPokemon/></PrivateRoute>}/>
                
        </Routes>
    </>
}