import React from "react"
import{useNavigate} from "react-router-dom"

const HomePage=()=>{

    const navigate = useNavigate()

    const publico = () =>{
        navigate("/trips/list")
    }
    const restrito=()=>{
        navigate("/login")
    
    }
    return(
        <>
   <h1>HomePage</h1>
   <button onClick={publico}>Ver Viagens</button>
   <button onClick={restrito}>Painel Administrativo</button>
   </>
)}

export default HomePage;