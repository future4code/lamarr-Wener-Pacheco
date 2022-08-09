import React,{useEffect,useState} from "react";
import axios from "axios";
import {ButtonNovaLista, Display, FormCadastro, users } from "../Style";


export const NovoUsuario = () => {

const[usuarios,setUsuarios] = useState({
    myInput: [
        {
        nomeUsuario:" ",
        email:" "
        }
    ]
})
    
    const[valorNomeUsuario,setValorNomeUsuario]= useState("")
    const[valorEmail,setValorEmail]= useState("")
    const[listaUsuarios,setListaUsuarios] = useState([])
    const[myInput,setMyInput] = useState([])
    
const onChangeValorUsuario = (event) =>{
    setValorNomeUsuario(event.target.value)
    }
const onChangeValorNovoEmail = (event) =>{
    setValorEmail(event.target.value)
}

const atualizaInput = (event) => {
 setMyInput(event.target.value)
    
}

{/*const AddInput = ()=>{
  const novoInput = {
    nomeUsuario: valorNomeUsuario,
    email: valorEmail
  }
*/}

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

const urlGet= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const urlPost="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const myHeaders ={
    headers:{
        Authorization: "wener-pacheco-lamarr"
    }
}

//GET

const getAllUsers = () => {
    axios.get(urlGet,myHeaders).then((response) => {
        setListaUsuarios(response.data.result.list)
    }).catch(
        (erro)=>{
            console.log(erro.response);
        })
    }

    //Post
const body = myInput


const postCreateUser = (event) =>{
    event.preventDefault()
    axios.post(urlPost,body,myHeaders).then(() =>{
        alert("Inclusão realizada com Sucesso!")
        getAllUsers()
    }).catch((erro)=>{
        alert("Deu ruim, inclusão não realizada!")
    })
    setMyInput("")
}
 return(
    <Display>
        <h1>Lista Usuários</h1>
        <users>
            {componenteLista}
        </users>
        <FormCadastro>
           <label>Nome
            <input
            value={valorNomeUsuario}
            onChange={onChangeValorUsuario}
            />
            </label>
            <label> Email
            <input
            value={valorEmail}
            onChange={onChangeValorNovoEmail}
            /></label>
            <ButtonNovaLista onChange= {postCreateUser}>
                Atualizar
            </ButtonNovaLista>
        </FormCadastro>
    </Display>
 )
 }

 export default NovoUsuario;

