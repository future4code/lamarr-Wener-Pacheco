import axios from "axios"
import React, { useEffect, useState } from "react";
import {Display,users} from "../Style"

{/*export function Cadastro (){ 
    return(
<form>
    <p><label>
        Nome:
        <input type="text" name="nome"/>
    </label></p>
    <label>
        E=mail:
        <input type="text" name="e-mail"/>
        <p><input type="Submit" value="Enviar"/></p>
    </label>
</form>
    )
}
*/}
export const ListaUserAtual = () => {

const [listaUsuarios, setListaUsuarios]= useState([])

const componenteLista = listaUsuarios.map((item,index)=>{
    return(<itemUser key={index}>
        {item.name}
        {item.email}
    </itemUser>)
})

useEffect(() => {
    getAllUsers()
},[])

//-----------Axios------------

const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const myHeaders ={
    headers:{
        Authorization: "wener-pacheco-lamarr"
    }
}

//GET

const getAllUsers = () => {
    axios.get(url,myHeaders).then((response) => {
        setListaUsuarios(response.data.result.list)
    }).catch(
        (erro)=>{
            console.log(erro.response);
        })
    }

return(
    <Display>
        <h1>Lista Usuários</h1>
        <users>
            {componenteLista}
        </users>
    </Display>
)
}
export default ListaUserAtual;