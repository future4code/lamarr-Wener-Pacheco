import React,{useState} from "react"
import { useForm } from "../../hooks/useForm"

const TripDetails=()=>{
    const [form,onChange]= useForm({ordem:"",titulo:"",destino:"",partida:"",descricao:"",duracao:""})
   
    
    const novaViagem=()=>{
        //event.preventDefault()
    }
   
    return(
        <div>
    <h1>Trip Details</h1>

    <form onSubmit={novaViagem}>
        <label>ID:</label>
        <input
        name="ordem"
        id="ordem"
        placeholder="Identificador"
        value={form.ordem}
        onChange={onChange}
        type="text"
        required
        /><br/>
        <label>Nome:</label>
        <input
        name="titulo"
        id="titulo"
        placeholder="Título da Viagem"
        value={form.titulo}
        onChange={onChange}
        type="text"
        required
        /><br/>
        <label>Destino:</label>
        <input
        name="destino"
        id="destino"
        placeholder="Destino da Viagem"
        value={form.destino}
        onChange={onChange}
        type="text"
        required
        /><br/>
        <label>Data:</label>
        <input
        name="partida"
        id="partida"
        placeholder="Data de partida"
        value={form.partida}
        onChange={onChange}
        type="text"
        required
        /><br/>
        <label>Descrição:</label>
        <input
        name="descricao"
        id="descricao"
        placeholder="Descrição para os Cliente"
        value={form.descricao}
        onChange={onChange}
        type="text"
        required
        /><br/>
        <label>Duração:</label>
        <input
        name="duracao"
        id="duracao"
        placeholder="Quantos dias de duração?"
        value={form.duracao}
        onChange={onChange}
        type="text"
        required
        /><br/>
    
    <button type="submit">Adicionar</button>   
    </form> 
 </div>
)
}

export default TripDetails;