import React from "react"
import axios from "axios";
import{useState} from 'react'

function ApplicationFormPage(){

const [body, setBody]= useState ({
        name: "",
        age: "" ,
        applicationText: "",
        profession: "",
        country: "",
    })
 const onChange=(event)=>{
    const{name,value}=event.target
    setBody({...body,[name]:value})
 }


const url= 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/wener-pacheco-lamarr/trips/:id/appl'

const postApplyToTrip=(event)=>{
    event.preventDefault()
    axios.post(url,body)
    .then(()=>{
        alert('Inclusão feita com Sucesso!')
    })
    .catch((erro)=>{
        alert('Ops, não foi possível incluir!')
    })

}
    return(
        <>
    <h1>Quero ir Nessa Viagem!</h1>
    <form >
        <label htmlFor="name">Nome:</label>
            <input
            name="name"
            id="name"
            placeholder="Nome"
            value={body.name}
            onChange={onChange}
            type="text"
            required
            /><br/>
        <label htmlFor="age">Idade:</label>
            <input
            name="age"
            id="age"
            placeholder="Idade"
            value={body.age}
            onChange={onChange}
            type="text"
            required
            /><br/>
            <label htmlFor="applicationText">Apresentação:</label>
            <input
            name="applicationText"
            id="applicationText"
            placeholder="Motivo para me escolher"
            value={body.applicationText}
            onChange={onChange}
            type="text"
            required
            /><br/>
            <label htmlFor="profession">Profissao:</label>
            <input
            name="profession"
            id="profession"
            placeholder="Informe sua profissão"
            value={body.profession}
            onChange={onChange}
            type="text"
            required
            /><br/>
              <label htmlFor="country">País:</label>
            <input
            name="country"
            id="country"
            placeholder="País"
            value={body.country}
            onChange={onChange}
            type="text"
            required
            /><br/>
            <button onClick={postApplyToTrip}>Candidatar</button>
    </form>
    </>
    )
}

export default ApplicationFormPage;