import React from "react"
import {useNavigate} from "react-router-dom"


const  AdminHomepage=()=> {
    const navigate= useNavigate()

    const candidatos =()=>{
        navigate("/admin/trips/:id")
    }
    const novaViagem=()=>{
        navigate("/admin/trips/create")
    }
    const logout=()=>{
        navigate("/")
    }

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <>
        <h1>Home Admin</h1>
       <button onClick={candidatos}>Listar Candidatos</button>
       <button onClick={novaViagem}>Criar Viagem</button>
       <button onClick={voltar}>Voltar</button>
       <button onClick={logout}>Logout</button>
       </>
)} 

export default AdminHomepage;